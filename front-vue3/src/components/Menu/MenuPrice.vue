<template>
  <div class="filter">
    <div>

      <div class="price-inputs">
        <div class="all_input">
          <div>
            <label>
              From:
            </label>
            <input type="number" v-model="minValue" @input="onInputChange('min')" />
          </div>

          <div>
            <label>
              To:
            </label>
            <input type="number" v-model="maxValue" @input="onInputChange('max')" />
          </div>
        </div>



      </div>
      <div id="rating" class="slider" ref="sliderContainer">
        <div class="block-min" ref="minBlock" @mousedown="startMoveRange('min')" @touchstart="startMoveRange('min')">
        </div>
        <div class="color-range" :style="colorRangeStyle"></div>
        <div class="block-max" ref="maxBlock" @mousedown="startMoveRange('max')" @touchstart="startMoveRange('max')">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted, defineProps, defineEmits } from 'vue';

const props = defineProps({
  initialMinValue: {
    type: Number,
    default: 1000
  },
  initialMaxValue: {
    type: Number,
    default: 500000
  },
  rangeMin: {
    type: Number,
    default: 0
  },
  rangeMax: {
    type: Number,
    default: 500000
  }
});


const sliderContainer = ref(null);
const minBlock = ref(null);
const maxBlock = ref(null);
const colorRangeStyle = reactive({ left: '0px', width: '100px' });

const minValue = ref(props.initialMinValue);
const maxValue = ref(props.initialMaxValue);

let activeElement = null;

function startMoveRange(type) {
  console.log(`Starting to move: ${type}`);
  activeElement = type;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('touchmove', onMouseMove);
  document.addEventListener('touchend', onMouseUp);
}

function getCoords(elem) {
  const coords = elem.getBoundingClientRect();
  return {
    left: coords.left + window.pageXOffset,
    width: coords.width
  };
}

function onMouseMove(e) {
  const sliderCoords = getCoords(sliderContainer.value);
  let posX = e.touches ? e.touches[0].clientX : e.clientX;
  let newLeft = posX - sliderCoords.left;

  if (activeElement === 'min') {
    const maxLeft = getCoords(maxBlock.value).left - sliderCoords.left - minBlock.value.offsetWidth;
    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    minBlock.value.style.left = `${newLeft}px`;
    minValue.value = ((newLeft / sliderCoords.width) * (props.rangeMax - props.rangeMin) + props.rangeMin).toFixed(1);
  } else {
    const minLeft = getCoords(minBlock.value).left - sliderCoords.left;
    newLeft = Math.min(sliderCoords.width - maxBlock.value.offsetWidth, Math.max(newLeft, minLeft));
    maxBlock.value.style.left = `${newLeft}px`;
    maxValue.value = ((newLeft / sliderCoords.width) * (props.rangeMax - props.rangeMin) + props.rangeMin).toFixed(1);
  }

  updateColorRange();
}


function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
  document.removeEventListener('touchmove', onMouseMove);
  document.removeEventListener('touchend', onMouseUp);
}

function updateColorRange() {
  const minLeft = minBlock.value.offsetLeft;
  const maxLeft = maxBlock.value.offsetLeft;
  colorRangeStyle.left = `${minLeft}px`;
  colorRangeStyle.width = `${maxLeft - minLeft}px`;
}

function onInputChange(type) {
  const sliderWidth = getCoords(sliderContainer.value).width;
  const blockWidth = minBlock.value.offsetWidth;

  if (type === 'min') {
    const newLeft = ((minValue.value - props.rangeMin) / (props.rangeMax - props.rangeMin)) * sliderWidth;
    minBlock.value.style.left = `${Math.max(0, Math.min(newLeft, sliderWidth - blockWidth))}px`;
  } else {
    const newLeft = ((maxValue.value - props.rangeMin) / (props.rangeMax - props.rangeMin)) * sliderWidth;
    maxBlock.value.style.left = `${Math.max(0, Math.min(newLeft, sliderWidth - blockWidth))}px`;
  }
  updateColorRange();
}

// Отправляем значения фильтра
const emit = defineEmits(['update:filter']);
watch([minValue, maxValue], ([newMin, newMax]) => {
  emit('update:filter', { min: newMin, max: newMax });
});

onMounted(() => {
  updateColorRange();
});
</script>




<style scoped>
label{
  font-family: Abel;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.005em;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #A7A7A7;
;
}
input {
  border: 0.5px solid #9F9F9F;
  width: 104px;
  height: 40px;
  padding: 8px;
  gap: 8px;
  border-radius: 3px;

  opacity: 0px;

}
.all_input{
  display: flex;
    justify-content: space-between;
    width: 100%;
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
.filter {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.price-inputs {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}

.slider {
  position: relative;
  width: 100%;
  height: 4px;
  background: #CECECE;
  
  border-radius: 5px;
  margin-top: 20px;
}

.block-min,
.block-max {
  position: absolute;
  top: -5px;
  width: 12px;
  height: 12px;
  background: #414141;

  border-radius: 50%;
  cursor: pointer;
}

.color-range {
  position: absolute;
  top: 0;
  height: 2px;
  background: #414141;


}
</style>