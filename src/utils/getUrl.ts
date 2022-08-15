import { CAMERA_IMAGE, HEADPHONE_IMAGE, KEYBOARD_IMAGE, LAPTOP_IMAGE, MONITOR_IMAGE, PLACEHOLDER_IMAGE, SAMSUNG_IMAGE, XIAOMI_IMAGE } from "@/consts"
import { ProductType } from "@/data/models"

export const getUrl = (product: ProductType) => {
  switch (product.imageName) {
    case 'camera.jpg' : { return CAMERA_IMAGE }
    case 'headphone.jpg' : { return HEADPHONE_IMAGE }
    case 'keyboard.jpg' : { return KEYBOARD_IMAGE }
    case 'laptop.jpg' : { return LAPTOP_IMAGE }
    case 'smartphone-samsung.jpg' : { return SAMSUNG_IMAGE }
    case 'smartphone-xiaomi.jpg' : { return XIAOMI_IMAGE }
    case 'monitor.jpg' : { return MONITOR_IMAGE }
    default : { return PLACEHOLDER_IMAGE }
  }
}