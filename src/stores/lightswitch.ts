import { defineStore } from 'pinia'

export const useLightSwitchStore = defineStore('lightSwitchStore', {
    state: () => ({
        _isLightOn: false,
        _color: '#FEEB7F',
    }),
    actions: {
        toggle() {
            this._isLightOn = !this._isLightOn;
        },

        changeColor(event : Event) {
            this._color = event.target.value;
        }
    },
    getters: {
        isLightOn: (state) => state._isLightOn,
        color: (state) => state._color,
    }
})
