<template>
    <button
    :type="type"
    @click.stop="(e) => clickHandler?.(e)"
    :class="buttonClassComputed"
    :style="btnStyle"
    :disabled="disabled"
  >
    <slot></slot>
    <i
      v-show="showIcon"
      :class="iconComputed"
      alt="button-icon"
    ></i>
  </button>
</template>
<script  lang="ts">

import { defineComponent, type PropType, computed } from 'vue';


type color = "primary" | "secondary" | "black"
type buttonType = "button" | "reset" | "submit"
type Size = "normal" | "small" | "large";
type variant =  "submit" | "navigate" | "edit" | "custom"


export default defineComponent({
    name:"PButton",
    props:{
        type: {
            type: String as PropType<buttonType>,
            default: "button"
        },
        size: {
            type: String as PropType<Size>,
            default: "normal"
        },
        color: {
            type: String as PropType<color>,
            default: "primary"
        },
        btnStyle: {
            type: [String, Object],
            default:''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: null
        },
        variant: {
            type: String as PropType<variant>,
            default: "submit" 
        },
        clickHandler: Function
    },
    // const showIcon = computed<Boolean>(
    //     () => {
    //    return true
    //     }
    // )
    computed: {
        showIcon<Boolean>() {
            return false
            
            
        },
        iconComputed<String>() {
            return "fas fa-edit"
        },
        buttonClassComputed<String>(){ 
            let style = " px-5 py-2 text-base font-medium text-center text-white focus:ring-4 focus:ring-blue-300 "
            // if (this.size === 'large') style += ' px-4 py-3 text-lg '
            // if (this.size === 'small') style += ' p-3 text-sm '
            switch (this.color) {
                case 'primary':
                    style += 'bg-primary hover:opacity-80 '
                    break;
                case 'secondary':
                    style += 'bg-secondary hover:opacity-80 '
                    break;
                    case 'black':
                    style += 'bg-common hover:opacity-80 '
                    break;
                    // default:
                    //   style += 'bg-primary hover:opacity-80 '
                    // break;
            }
            switch (this.variant) {
                case 'navigate':
                    style += ' rounded-full '
                    if (this.active) style += ' ring-4 ring-blue-300 '
                    break;
                default:
                if (this.active) style += ' bg-common '
                //     style += ' rounded-md '
            }
            
            return style
        }
    }
})
</script>