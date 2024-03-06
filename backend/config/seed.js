require("dotenv").config();
require("./database");

//input menu items depending on restaurant

const Category = require("../models/Category");
const Item = require("../models/Item");

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Ramen Bowls", sortOrder: 10 },
    { name: "Appetizers", sortOrder: 20 },
    { name: "Rice and Noodle", sortOrder: 30 },
    { name: "Salad", sortOrder: 40 },
    { name: "Sushi & Sashimi", sortOrder: 50 },
    { name: "Chef Special Roll", sortOrder: 60 },
    { name: "Regular Roll", sortOrder: 70 },
    { name: "Drink", sortOrder: 80 },
    { name: "Extras", sortOrder: 90 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047108/Ramen%20Time%20Images/TONKOTSU-RAMEN_h92yt3.png",
      name: "Tonkotsu Ramen",
      description: "Cha Shu, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion",
      category: categories[0],
      price: 14.49,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047105/Ramen%20Time%20Images/SPICY-MISO-MISO-RAMEN_foltiz.png",
      name: "Miso Ramen",
      description: "Cha Shu, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion",
      category: categories[0],
      price: 14.49,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047098/Ramen%20Time%20Images/KIMCHI-RAMEN_pcrlop.png",
      name: "Kimchi Ramen",
      description:
        "Cha Shu, Kimchi, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion",
      category: categories[0],
      price: 15.49,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047108/Ramen%20Time%20Images/VEGETABLE-RAMEN_areng9.png",
      name: "Vegetable Ramen",
      description:
        "Tofu, Broccoli, Wood Ear, Corn, Scallion, Radish, Bamboo Shoot",
      category: categories[0],
      price: 15.49,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047103/Ramen%20Time%20Images/SHOYU-RAMEN_wn744b.png",
      name: "Shoyu Ramen",
      description: "Cha Shu, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion",
      category: categories[0],
      price: 15.49,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047098/Ramen%20Time%20Images/HELL-RAMEN_actjmo.png",
      name: "Hell Ramen",
      description: "Cha Shu, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion",
      category: categories[0],
      price: 18.49,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047091/Ramen%20Time%20Images/CHICKEN-RAMEN_bo66gd.png",
      name: "Chicken Ramen",
      cdescription: "Chicken, Corn, Bamboo Shoot, Wood Ear, Egg, Scallion",
      category: categories[0],
      price: 16.49,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047101/Ramen%20Time%20Images/SEAFOOD-RAMEN_dkujne.png",
      name: "Seafood Ramen",
      description: "Scallion, Shrimp, Fish Cake, Mussel, Tofu, Corn",
      category: categories[0],
      price: 18.49,
    },

    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047093/Ramen%20Time%20Images/EDAMAME_cxfjxl.png",
      name: "Edamame",
      category: categories[1],
      price: 5.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047091/Ramen%20Time%20Images/DUMPLING_uhcmnq.png",
      name: "Dumpling (6pcs)",
      description: "Steamed /Fried /Pan Fried",
      category: categories[1],
      price: 5.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047105/Ramen%20Time%20Images/STEAMED-PORK-BAO-BUN_wtmkl4.png",
      name: "Steamed Pork Bao Bun",
      category: categories[1],
      price: 3.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047097/Ramen%20Time%20Images/FRIED-PURPLE-POTATO_giachn.png",
      name: "Fried Purple Potato",
      category: categories[1],
      price: 4.99,
    },
    {
      ing: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047105/Ramen%20Time%20Images/SPRING-ROLLS_tcybic.png",
      name: "Spring Rolls (3pcs)",
      category: categories[1],
      price: 4.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047101/Ramen%20Time%20Images/SCALLION-PANCAKE_imnpdx.png",
      name: "Scallion Pancake",
      category: categories[1],
      price: 4.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047090/Ramen%20Time%20Images/AGED-TOFU_kk9ext.png",
      name: "Aged Tofu",
      category: categories[1],
      price: 5.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047104/Ramen%20Time%20Images/STEAMED-CHASIU-BAO_rwicbs.png",
      name: "Steamed Chasiu Bao",
      category: categories[1],
      price: 6.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047091/Ramen%20Time%20Images/CRAB-RANGOON_m6arul.png",
      name: "Crab Rangoon (6pcs)",
      category: categories[1],
      price: 6.49,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047107/Ramen%20Time%20Images/TEMPURA-SHRIMP_zkhnf6.png",
      name: "Tempura Shrimp (5pcs)",
      category: categories[1],
      price: 8.49,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047091/Ramen%20Time%20Images/CHICKEN-KARAAGE_mjzuep.png",
      name: "Chicken Karaage",
      category: categories[1],
      price: 7.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047100/Ramen%20Time%20Images/OKONOMIYAKI_wxljee.png",
      name: "Okonomiyaki",
      category: categories[1],
      price: 7.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047097/Ramen%20Time%20Images/FRIED-CHICKEN-WINGS_jcvt54.png",
      name: "Fried Chicken Wings (6pcs)",
      category: categories[1],
      price: 8.49,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047107/Ramen%20Time%20Images/TAKOYAKI_bykvbh.png",
      name: "Takoyaki",
      category: categories[1],
      price: 7.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047096/Ramen%20Time%20Images/FRIED-OYSTER_ovccw2.png",
      name: "Fried Oyster",
      category: categories[1],
      price: 9.99,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047097/Ramen%20Time%20Images/FRIED-SQUID_sd7tqy.png",
      name: "Fried Squid",
      category: categories[1],
      price: 9.99,
    },

    { name: "Egg Fried Rice", category: categories[2], price: 9.99 },
    { name: "Shrimp Fried Rice", category: categories[2], price: 15.49 },
    { name: "Seafood Fried Rice", category: categories[2], price: 18.49 },
    { name: "Pork Katsu Over Rice", category: categories[2], price: 15.49 },
    { name: "Braised Pork Over Rice", category: categories[2], price: 13.49 },
    {
      name: "Curry Fried Mei Fun",
      description: "Chicken/Shrimp/Cha Shu",
      category: categories[2],
      price: 13.99,
    },
    {
      name: "Fried Mei Fun",
      description: "Chicken/Shrimp/Cha Shu",
      category: categories[2],
      price: 12.99,
    },
    {
      name: "Stir Fried Noodle",
      description: "Chicken/Shrimp/Cha Shu",
      category: categories[2],
      price: 12.99,
    },
    {
      name: "Stir Fried Udon Noodle",
      description: "Chicken/Shrimp/Cha Shu",
      category: categories[2],
      price: 13.99,
    },

    { name: "Kani Salad", category: categories[3], price: 6.95 },
    { name: "Seaweed Salad", category: categories[3], price: 6.25 },

    { name: "Salmon(2pc)", category: categories[4], price: 5.5 },
    { name: "Tuna(2pc)", category: categories[4], price: 5.5 },
    { name: "Yellowtail(2pc)", category: categories[4], price: 5.5 },
    { name: "Eel(2pc)", category: categories[4], price: 5.95 },
    { name: "Crabstick(2pc)", category: categories[4], price: 4.25 },
    {
      name: "Bruce Roll",
      description:
        "Lump Crab & Shrimp Tempura inside Avocado layer on top & Eel Sauce",
      category: categories[5],
      price: 14.95,
    },
    {
      name: "DragonRoll",
      description: "Eel Cucumber inside, Avocado & Eel sauce & fish egg",
      category: categories[5],
      price: 12.95,
    },
    {
      name: "Big Boss Roll",
      description:
        "Lump Crab Meat, Shrimp Tempura inside, Eel, Avocado on top, Eel sauce and sesame",
      category: categories[5],
      price: 17.95,
    },
    {
      name: "Tuna Bonfire Roll",
      description: " Spicy Tuna & Jalapeno inside, Topped with Tuna & Avocado",
      category: categories[5],
      price: 12.95,
    },
    {
      name: "Godzilla Roll",
      description:
        "Avocado, Tuna, White fish, Cheese and Spicy mayo all deep-fried topped with Spicy mayo and Eel Sauce",
      category: categories[5],
      price: 12.95,
    },
    {
      name: "Lava Roll",
      description:
        "Spicy Tuna and Seasoned Lump Crab inside, White Fish and Avocado on top with Spicy Mayo",
      category: categories[5],
      price: 14.95,
    },
    {
      name: "Rainbow Roll",
      description:
        " Crab meat Cucumber and Avocado inside W. Salmon, Tuna, White Tuna and Shrimp.",
      category: categories[5],
      price: 13.95,
    },
    {
      name: "Old Town Roll",
      description:
        "Shrimp Tempura Avocado Inside. Creamy Spicy Crab Meat and crunchy on top W Eel Sauce. Spicy Mayo",
      category: categories[5],
      price: 12.95,
    },
    {
      img: "",
      name: "Chesapeake Roll",
      description: "Old Bay-Seasoned Lump Crab and Avocado ",
      category: categories[5],
      price: 8.95,
    },
    {
      name: "Monkey Roll",
      description:
        "Shrimp Tempura & Cumcumber inside, Avocado layered n top with three kinds of sauce on top",
      category: categories[5],
      price: 12.95,
    },
    {
      name: "American Dream Roll",
      description:
        "Shrimp Tempura inside. Steam Shrimp on the top w Eel & Spicy Mayo Sauce",
      category: categories[5],
      price: 12.95,
    },
    {
      name: "Cook Dynamite Roll",
      description: "Salmon, Tuna and White Fish Topped with Spicy Mayo",
      category: categories[5],
      price: 14.95,
    },
    {
      name: '"I Like That" Roll',
      description:
        "Shrimp and Avocado inside. Whole Roll Fried Seasoned Lump Crab on Top w Sriracha",
      category: categories[5],
      price: 15.95,
    },
    {
      name: "James Town Roll",
      description:
        "Spicy Yellowtail inside, Topped with Tuna. White Fish, Scallion, Fish Egg",
      category: categories[5],
      price: 12.95,
    },
    {
      name: "Royal Crab Roll",
      description: "California Roll inside. Topped with Lump Crab & Avocado",
      category: categories[5],
      price: 13.95,
    },
    {
      name: "Spicy Girl Roll",
      description:
        "Spicy Tuna Spicy Salmon and Spicy Yellowtail inside, Avocado layered on top w Spicy Mayo & crunchy flake ",
      category: categories[5],
      price: 14.95,
    },
    {
      name: "Crispy Dragon Roll",
      description:
        "Crab Stick Tempura and Eel inside. Topped with Avocado, Eel sauce and Crunchy Flake",
      category: categories[5],
      price: 14.95,
    },
    {
      name: "Tiger Roll",
      description:
        "Shrimp Tempura, Cream Cheese and Spicy Crab Meat with soy wrap and Eel Sauce",
      category: categories[5],
      price: 10.95,
    },
    {
      name: "Salmon Lover Roll",
      description:
        "Spicy salmon & Avocado inside. Topped with Salmon and fish egg",
      category: categories[5],
      price: 13.95,
    },
    {
      name: "Crunch Roll",
      description:
        "Lump crab, Steam Shrimp, Avocado, top with Old Bay & crunch flake",
      category: categories[5],
      price: 10.95,
    },
    {
      name: "Volcano Roll",
      description:
        "Crab Stick, Tuna, Cucumber, Whole Roll, Deep Fried. Topped with Mayonnaise, Sriracha and Eel Sauce",
      category: categories[5],
      price: 8.95,
    },
    {
      name: "Las Vegas Roll",
      description:
        "Whole Roll Fried with Salmon Cream Cheese and steam shrimp. Topped with Eel & Spicy Mayo",
      category: categories[5],
      price: 12.95,
    },
    {
      name: "Salmon Lover Roll",
      description:
        "Spicy Salmon & Avocado inside. Topped with Salmon and fish egg",
      category: categories[5],
      price: 13.95,
    },
    {
      name: "Crispy Mango Roll",
      description:
        "Tuna and Salmon Tempura inside. Topped with slices of Mango and Drizzle with Sweet Mango Sauce and Crunch Flake ",
      category: categories[5],
      price: 13.95,
    },
    { name: "Avocado Roll", category: categories[6], price: 4.25 },
    { name: "Cucumber Roll", category: categories[6], price: 4.25 },
    { name: "California Roll", category: categories[6], price: 5.75 },
    { name: "Avocado Cucumber Roll", category: categories[6], price: 4.95 },
    { name: "Sweet Potato Roll", category: categories[6], price: 5.25 },
    { name: "Philadelphia Roll", category: categories[6], price: 5.95 },
    { name: "Salmon Roll", category: categories[6], price: 5.5 },
    { name: "Tuna Roll", category: categories[6], price: 5.5 },
    { name: "Yellowtail Scallion Roll", category: categories[6], price: 5.75 },
    { name: "Eel Avocado Roll", category: categories[6], price: 6.75 },
    { name: "Eel Cucumber Roll", category: categories[6], price: 6.75 },
    { name: "Mango Shrimp Roll", category: categories[6], price: 5.95 },
    { name: "Spicy Tuna Roll", category: categories[6], price: 5.95 },
    { name: "Spicy Salmon Roll", category: categories[6], price: 5.95 },
    { name: "Salmon Avocado Roll", category: categories[6], price: 6.5 },
    { name: "Tuna Avocado Roll", category: categories[6], price: 6.5 },
    { name: "Spicy Crab Meat Roll", category: categories[6], price: 5.5 },
    { name: "Spicy Shrimp Roll", category: categories[6], price: 5.5 },

    { name: "Pepsi/ Diet Pepsi", category: categories[7], price: 2.99 },
    { name: "Starry", category: categories[7], price: 2.99 },
    { name: "Lemonade", category: categories[7], price: 2.99 },
    { name: "Dr. Pepper", category: categories[7], price: 2.99 },
    { name: "Ginger Ale", category: categories[7], price: 2.99 },
    { name: "Apple Juice", category: categories[7], price: 2.99 },
    { name: "Green Tea", category: categories[7], price: 1.5 },
    { name: "Thai Tea", category: categories[7], price: 3.49 },
    { name: "Ramunee(Strawberry)", category: categories[7], price: 3.75 },
    { name: "Ramunee(Original)", category: categories[7], price: 3.75 },

    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047094/Ramen%20Time%20Images/EXTRA-NOODLE_dflbfr.png",
      name: "Extra Noodle",
      category: categories[8],
      price: 2.5,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047092/Ramen%20Time%20Images/EXTRA-CHASHU-PORK_nldjn7.png",
      name: "Chashu Pork (2 slices)",
      category: categories[8],
      price: 2.5,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047092/Ramen%20Time%20Images/EXTRA-BIG-SHRIMP_vb5tua.png",
      name: "Big Shrimp (2 slices)",
      category: categories[8],
      price: 3.5,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047093/Ramen%20Time%20Images/EXTRA-CORN_zciibz.png",
      name: "Corn",
      category: categories[8],
      price: 2.0,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047092/Ramen%20Time%20Images/EXTRA-BAMBOO-SHOOT_tdkjqo.png",
      name: "Bamboo Shoot",
      category: categories[8],
      price: 2.0,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047093/Ramen%20Time%20Images/EXTRA-EGG_pajpms.png",
      name: "Egg",
      category: categories[8],
      price: 1.0,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047094/Ramen%20Time%20Images/EXTRA-WOOD-EAR_cygfat.png",
      name: "Wood Ear",
      category: categories[8],
      price: 2.0,
    },
    {
      img: "https://res.cloudinary.com/dxh60x8dq/image/upload/v1709047093/Ramen%20Time%20Images/EXTRA-KIMCHI_edag7x.png",
      name: "Kimchi",
      category: categories[8],
      price: 2.5,
    },
  ]);

  console.log(items);

  process.exit();
})()
