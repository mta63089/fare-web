// lib/menu.ts
export interface MenuItem {
  name: string
  description: string
  imageSrc: string
  isVegan?: boolean
  isGlutenFree?: boolean
  price: number
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export const categories: MenuCategory[] = [
  {
    id: "plates",
    label: "Plates",
    items: [
      {
        name: "Smoky Chicken Plate",
        description:
          "Smoky Chicken, Harissa Sweet Potatoes, Green Goddess Slaw, Mac & Cheese, Spicy Red Pepper Sauce, Mini Cornbread Muffin",
        imageSrc: "/menu/smoky-chicken-plate.jpg",
        price: 15.99,
      },
      {
        name: "Turkey Meatball Plate",
        description:
          "Turkey Meatballs, House Grains, Sweet & Sour Cucumbers, Roasted Carrots, Greek Yogurt Ranch, Mini Cornbread Muffin",
        imageSrc: "/menu/turkey-meatball-plate.jpg",
        isGlutenFree: true,
        price: 16.99,
      },
      {
        name: "Salmon Plate",
        description:
          "Roasted Salmon, Harissa Sweet Potatoes, Tomatoes & Peaches, Sweet & Sour Cucumbers, Creamy Tahini, Mini Cornbread Muffin",
        imageSrc: "/menu/salmon-plate.jpg",
        isGlutenFree: true,
        price: 18.99,
      },
      {
        name: "Miso Tofu Veggie Plate",
        description:
          "Miso Tofu, House Grains, Roasted Red Peppers, Chickpeas & Feta, Roasted Carrots, Herby Pesto, Mini Cornbread Muffin",
        imageSrc: "/menu/miso-tofu-veggie-plate.jpg",
        isGlutenFree: true,
        price: 15.99,
      },
    ],
  },
  {
    id: "bowls",
    label: "Bowls",
    items: [
      {
        name: "Smoky Chicken Bowl",
        description:
          "Lemon Kale, House Greens, Green Goddess Slaw, Harissa Sweet Potatoes, Creamy Tahini",
        imageSrc: "/menu/smoky-chicken-bowl.jpg",
        price: 13.0,
      },
      {
        name: "Turkey Meatball Bowl",
        description:
          "Turkey Meatballs, Romano & Spinach, Roasted Red Peppers, Chickpeas & Feta, Sweet & Sour Cucumbers, Creamy Tzatziki",
        imageSrc: "/menu/turkey-meatball-bowl.jpg",
        price: 14.0,
      },
      {
        name: "Salmon Bowl",
        description:
          "Roasted Salmon, Lemon Kale, Elote Corn Salad, Tomatoes & Peaches, Green Yogurt Ranch",
        imageSrc: "/menu/salmon-bowl.jpg",
        price: 15.0,
      },
      {
        name: "Miso Tofu Veggie Bowl",
        description:
          "Miso Tofu, Romaine & Spinach, Roasted Carrots, Sweet & Sour Cucumbers, Herby Pesto",
        imageSrc: "/menu/miso-tofu-veggie-bowl.jpg",
        isVegan: true,
        price: 13.5,
      },
    ],
  },
  {
    id: "craft-your-own",
    label: "Craft Your Own",
    items: [
      {
        name: "Craft Your Own Bowl",
        description:
          "Pick a base, two seasonal toppers, a protein and finish it off with one of our signature sauces",
        imageSrc: "/menu/craft-your-own-bowl.jpg",
        price: 11.0,
      },
      {
        name: "Craft Your Own Plate",
        description:
          "Pick three of our delicious sides, a protein and finish it off with one of our signature sauces. All plates come with a mini cornbread muffin",
        imageSrc: "/menu/craft-your-own-plate.jpg",
        price: 13.0,
      },
    ],
  },

  {
    id: "smoothies",
    label: "Smoothies",
    items: [
      {
        name: "SunButter Berry Smoothie",
        description:
          "Strawberries & Raspberries, SunButter, Dates, Almond Milk (contains nuts)",
        imageSrc: "/menu/sunbutter-berry-smoothie.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 10.0,
      },
      {
        name: "Green Glow Smoothie",
        description:
          "Spinach, Lemon & Juice, Mango, Avocado, Dates, Almond Milk",
        imageSrc: "/menu/green-glow-smoothie.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 10.0,
      },
      {
        name: "Blueberry Almond Smoothie",
        description:
          "Blueberries, Banana, Almonds, Cinnamon, Dates, Almond Milk (contains nuts)",
        imageSrc: "/menu/blueberry-almond-smoothie.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 10.0,
      },
    ],
  },
  {
    id: "sweets",
    label: "Sweets",
    items: [
      {
        name: "Chocolate Chip Cookie",
        description: "Oat, Almond Flour, Dark Chocolate (contains nuts)",
        imageSrc: "/menu/chocolate-chip-cookie.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 1.99,
      },
      {
        name: "Cornbread Muffin",
        description:
          "Roasted Pumpkin, Oat Flour, Cornmeal, Olive Oil, Maple Syrup",
        imageSrc: "/menu/cornbread-muffin.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 0.99,
      },
    ],
  },
  {
    id: "veggie-sides",
    label: "Veggie Sides",
    items: [
      {
        name: "Harissa Sweet Potatoes",
        description:
          "Oven Roasted Sweet Potato, Housemade Harissa, Maple Syrup",
        imageSrc: "/menu/harissa-sweet-potatoes.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 5.0,
      },
      {
        name: "Mac + Cheese",
        description: "Local Cheddar, Parmigiano Reggiano, Warm Spices",
        imageSrc: "/menu/mac-and-cheese.jpg",
        price: 5.0,
      },
      {
        name: "Green Goddess Slaw",
        description:
          "Kale, Cabbage, Basil, Parsley, Red Onion, Green Goddess Dressing",
        imageSrc: "/menu/green-goddess-slaw.jpg",
        price: 5.0,
      },
      {
        name: "Roasted Carrots Side",
        description: "Carrots, Olive Oil",
        imageSrc: "/menu/roasted-carrots-side.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 5.0,
      },
      {
        name: "Elote Corn Salad",
        description: "Corn, Red Onion, Jalapeño, Cotija, Lime",
        imageSrc: "/menu/elote-corn-salad.jpg",
        price: 5.0,
      },
      {
        name: "Tomatoes + Peaches",
        description: "Cherry Tomatoes, Peaches, Basil, Honey",
        imageSrc: "/menu/tomatoes-peaches.jpg",
        isGlutenFree: true,
        price: 5.0,
      },
      {
        name: "Sweet & Sour Cucumber Side",
        description: "Persian Cucumbers, Red Wine Vinegar, Honey, Parsley",
        imageSrc: "/menu/sweet-sour-cucumber-side.jpg",
        isGlutenFree: true,
        price: 5.0,
      },
    ],
  },
  {
    id: "protein-sides",
    label: "Protein Sides",
    items: [
      {
        name: "Smoky Chicken",
        description: "Chicken Thighs, Housemade Smoky Spice Blend",
        imageSrc: "/menu/smoky-chicken.jpg",
        price: 3.99,
      },
      {
        name: "Basil Turkey Meatballs",
        description: "Local Ground Turkey, Basil, Ricotta, Olive Oil",
        imageSrc: "/menu/basil-turkey-meatballs.jpg",
        price: 3.49,
      },
      {
        name: "Roasted Salmon",
        description: "Sustainable Salmon, Olive Oil",
        imageSrc: "/menu/roasted-salmon.jpg",
        price: 7.49,
      },
      {
        name: "Avocado Mash",
        description: "Avocado, Fresh Lemon",
        imageSrc: "/menu/avocado-mash.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 3.49,
      },
      {
        name: "Miso Tofu",
        description: "Local Phoenix Bean Tofu, Miso Glaze",
        imageSrc: "/menu/miso-tofu.jpg",
        isVegan: true,
        price: 3.99,
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    items: [
      {
        name: "Bottled Water",
        description: "",
        imageSrc: "/menu/bottled-water.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 2.75,
      },
      {
        name: "Spindrift",
        description: "",
        imageSrc: "/menu/spindrift.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 2.95,
      },
      {
        name: "Fermensch",
        description: "",
        imageSrc: "/menu/fermensch.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 5.95,
      },
      {
        name: "FARE x RMRR Limeade Kombucha",
        description: "",
        imageSrc: "/menu/fare-limeade-kombucha.jpg",
        isVegan: true,
        isGlutenFree: true,
        price: 4.99,
      },
    ],
  },
]
