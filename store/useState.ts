export const useSelectedColor = () => useState("selected-color", () => '');
export const useAvailableColors = () => useState("available-colors", () => [
		"red",
		"orange",
		"yellow",
		"green",
		"turquoise",
		"blue",
		"lilac",
		"pink",
		"white",
		"gray",
		"black",
		"brown",
	]);