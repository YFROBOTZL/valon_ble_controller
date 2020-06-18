function 右转 () {
    驱动电机(1023, 512)
}
function 左转 () {
    驱动电机(512, 1023)
}
bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    停止()
    basic.showString("D")
})
function 后退 () {
    驱动电机(-1023, -1023)
}
function 前进 () {
    驱动电机(1023, 1023)
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        前进()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        停止()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        后退()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        停止()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        左转()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        停止()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        右转()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        停止()
    }
})
function 停止 () {
    驱动电机(0, 0)
}
// 电机速度值范围：-1023~1023
function 驱动电机 (左电机速度: number, 右电机速度: number) {
    if (左电机速度 > 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 左电机速度)
    } else if (左电机速度 < 0) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P14, Math.abs(左电机速度))
    } else {
        pins.analogWritePin(AnalogPin.P14, 0)
    }
    if (右电机速度 > 0) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 右电机速度)
    } else if (右电机速度 < 0) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P16, Math.abs(右电机速度))
    } else {
        pins.analogWritePin(AnalogPin.P16, 0)
    }
}
basic.showString("Valon")
