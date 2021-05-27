import {mexicanPizzaImage,
	cheeseCheesePizzaImage,
	fromChefPizzaImage,
	vyatskyiKvasDrinkImage,
	afanasyMilkDrinkImage,
	defaultItemImage,
} from "./images"

const Mapper = {
	"Мексиканская": mexicanPizzaImage,
	"От Шефа": fromChefPizzaImage,
	"Сыр сыр": cheeseCheesePizzaImage,
	"Вятский квас": vyatskyiKvasDrinkImage,
	"Молоко Афанасий": afanasyMilkDrinkImage
};

export const imageToItemMapper = (itemName) => {
	if(Mapper[itemName]!==undefined){
		return Mapper[itemName];
	}
	return defaultItemImage;
};