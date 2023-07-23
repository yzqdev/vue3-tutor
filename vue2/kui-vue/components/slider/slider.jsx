import Thumb from './thumb'
import { times } from '../_tool/number'
export default {
  props: {
    value: [Array, Number, String],
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    disabled: Boolean,
    step: {
      type: Number,
      default: 1,
      validator: (val) => val !== 0
    },
    range: Boolean,
    vertical: Boolean,
    reverse: Boolean,
    marks: Object,
    included: { type: Boolean, default: true },
    tipFormatter: [Function, Object],
    tooltipVisible: Boolean
  },
  watch: {
    value() {
      this.defaultValue = this.getValue()
    }
  },
  provide() {
    return {
      bar: this,
    }
  },
  data() {
    return {
      defaultValue: this.getValue(),
      // percent1: 0,
      // percent2: 0,
      // width: 0,
      // left: 0,
      isMouseDown: false
    }
  },
  methods: {
    getMinStep(percent) {
      let { marks, step, min } = this
      if (!marks) return times(Math.round((percent + min) / step), step)
      let steps = Object.keys(marks)//, values = []
      steps = steps.map(x => x - min)
      if (step) {
        steps.push(times(Math.round((percent) / step), step))
      }

      let result = steps.reduce((x, y) => Math.abs(x - percent) > Math.abs(y - percent) ? y : x)
      // let result = steps.reduce((x, y) => Math.abs(x - percent) > Math.abs(y - percent) ? y : x)
      // console.log(percent, result, steps)
      return result + min
    },
    getValue() {
      let { value = 0, range, min, max } = this, v;
      let diff = max - min;
      if (!range) {
        v = value
        if (value >= max) v = max
        else if (value <= min) v = min
        // let percent = (v - min) * 100 / diff
        // v = this.getMinStep(percent)
      } else {

        if (!Array.isArray(value)) {
          v = [0, 0]
        } else {
          v = [].concat(value)
        }
        let [x, y] = v

        // let p1 = (x - min) * 100 / diff
        // let p2 = (y - min) * 100 / diff
        // x = this.getMinStep(p1)
        // y = this.getMinStep(p2)
        // console.log(p1 * 100, p2 * 100)

        if (x >= max) x = max
        else if (x <= min) x = min

        if (y >= max) y = max
        else if (y <= min) y = min

        v = [x, y]
      }
      return v
    },
    click(e) {
      let { disabled, range, vertical, step, max, min, defaultValue, reverse } = this
      if (disabled) return;
      let { width, height } = e.target.getBoundingClientRect()
      let { layerX, layerY } = e

      let percent = 0, diff = max - min;
      if (reverse) {
        percent = vertical ? (((height - layerY) / height) * diff) : (((width - layerX) / width) * diff);
      } else {
        percent = vertical ? ((layerY / height) * diff) : ((layerX / width) * diff);
      }
      let value = this.getMinStep(percent)
      // let value = times(Math.round((percent + min) / step), step)
      // console.log(value, step)

      if (range) {
        let [x, y] = defaultValue
        let half = y > x ? (y - x) / 2 + x : (x - y) / 2 + y
        value = value >= half && y > x ? [x, value] : [value, y]
      }

      this.defaultValue = value
      this.$emit('input', value)
    },
    isActice(a) {
      let { defaultValue, reverse, max, min, vertical } = this
      let active;
      if (this.range) {
        let [x, y] = defaultValue
        active = x < y ? (a >= x && a <= y) : (a <= x && a >= y)
        // console.log(a, active, `${a} >= ${x} && ${a} <= ${y}`)
      } else {
        active = a <= defaultValue
      }
      let diff = max - min
      let pos = ((a - min) / diff) * 100 + '%'
      let sty = {}
      if (reverse) {
        sty = vertical ?
          { bottom: pos, transform: 'translateY(50%)' } :
          { right: pos, transform: 'translateX(50%)' }
      } else {
        sty = vertical ?
          { top: pos } :
          { left: pos }
      }
      return { active, sty }
    },
    renderMark() {
      let { marks } = this
      if (!marks) return null
      let mks = Object.keys(marks || {})
      let txt = Object.values(marks || {})

      return <div div class="k-slider-marks" >
        {
          mks.map(v => {
            const { active, sty } = this.isActice(v);
            return <div class={['k-slider-mark-symbol', { 'k-slider-mark-symbol-active': active }]} style={sty} />
          })
        }
        {
          mks.map((v, i) => {
            let { active, sty } = this.isActice(v);
            return <div class={['k-slider-mark-text', { 'k-slider-mark-text-active': active }]} style={sty}>{txt[i]}</div>
          })
        }
      </div>
    },
    renderTrack() {
      let { vertical, max, min, defaultValue, range, included, marks, reverse } = this
      let percent1 = 0, percent2 = 0, diff = max - min;
      let w, l;

      if (!range) {
        percent2 = ((defaultValue - min) / diff) * 100

      } else {
        let [x, y] = defaultValue
        percent1 = ((x - min) / diff) * 100
        percent2 = ((y - min) / diff) * 100
      }
      let trackSty = {}
      // console.log(percent1, percent2)
      if (percent2 > percent1) {
        w = percent2 - percent1
        l = percent1
      } else {
        w = percent1 - percent2
        l = percent2
      }
      if (reverse) {
        trackSty = vertical ? {
          height: `${w}%`,
          top: 'auto',
          bottom: `${l}%`
        } : {
          width: `${w}%`,
          left: 'auto',
          right: `${l}%`
        }
      } else {
        trackSty = vertical ? {
          height: `${w}%`,
          top: `${l}%`
        } : {
          width: `${w}%`,
          left: `${l}%`
        }
      }
      return (included && marks) || !marks ?
        <div class="k-slider-track" style={{ ...trackSty }}></div> : null

    },
    thumbProps() {
      let { vertical, disabled, range, step, reverse, max, min, defaultValue, tooltipVisible, tipFormatter } = this
      return {
        props: {
          vertical, disabled, range, step, reverse, min,
          max, tipFormatter, tooltipVisible,
          value: range ? [].concat(defaultValue) : defaultValue * 1
        },
        on: {
          input: (value) => {
            this.defaultValue = value
            this.$emit('input', value)
          }
        }
      }
    }
  },
  render() {
    let { disabled, vertical, range } = this
    let leftProps = this.thumbProps()
    let rightProps = this.thumbProps()
    let trackNode = this.renderTrack()
    let markNode = this.renderMark()

    return <div class={['k-slider', { 'k-slider-disabled': disabled, 'k-slider-vertical': vertical }]}>
      <div class="k-slider-bar">
        <div class="k-slider-rail" ref="rail" onClick={this.click}></div>
        {trackNode}
        {range ? <Thumb {...leftProps} /> : null}
        <Thumb {...rightProps} type="right" />
        {markNode}
      </div>
      {/* {this.renderMark()} */}
    </div>
  }
} 