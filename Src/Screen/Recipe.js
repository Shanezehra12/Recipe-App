import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RecipeCard from '../Components/RecipeCard';

const recipes = [
  {
    id: 1,
    title: 'Pancakes',
    image: "https://www.giverecipe.com/wp-content/uploads/2020/10/Almond-Milk-Pancakes.jpg",
    description: 'Delicious and fluffy pancakes.',
    ingredients: ['1 cup flour', '2 tablespoons sugar', '1 teaspoon baking powder', '1/2 teaspoon salt', '1 cup milk', '1 egg', '2 tablespoons melted butter'],
    method: '1. In a large bowl, whisk together the flour, sugar, baking powder, and salt. \n2. In a separate bowl, whisk together the milk, egg, and melted butter. \n3. Pour the wet ingredients into the dry ingredients and stir until just combined. \n4. Heat a griddle or non-stick skillet over medium heat. \n5. Scoop 1/4 cup portions of batter onto the griddle and cook until bubbles form on the surface. \n6. Flip the pancakes and cook for an additional 1-2 minutes, until golden brown. \n7. Serve hot with your favorite toppings.'
  },

  {
    id: 2,
    title: 'Jalapeno Grilled Chicken Cheese Sandwich',
    image: "https://www.thenews.com.pk/assets/uploads/magazine/2023-06-05/1077295_2473640_doc6_magazine.jpg",
    description: 'Delicious and cheesy mouthwatering snack.',
    ingredients: ['Worcestershire sauce 2 tbs', 'Pickle water 1 tbs', 'Brown sugar 2 tsp', 'Lehsan (Garlic) chopped ½ tbs', 'Boneless chicken small cubes 350g', 'Namak (Salt) ½ tsp or to taste', 'Paprika powder 1 tsp', 'Black pepper powder ½ tsp', 'Cornflour 1 & ½ tbs', 'Oil 2-3 tbs', 'Onion chopped 1 small', 'Pickled jalapeno sliced ¼ Cup', 'Bread large as required', 'Butter', 'Cheddar cheese slice', 'Mozzarella cheese as required'],
    method: '1. In a small jug,add worcestershire sauce,pickle water,brown sugar,garlic,mix well & set aside. \n2. In a bowl,add chicken,salt,paprika powder,black pepper powder,cornflour & mix well. \n3. In a frying pan,add cooking oil,chicken,mix well & cook on medium flame until golden (6-8 minutes). \n4. Add onion,pickled jalapenos,mix well & cook for a minute. \n5. Add prepared sauce,mix well & cook for 2-3 minutes & set aside. \n6. Spread butter on one side of bread slice,place cheddar cheese slice & mozzarella cheese (grated). \n7. Add cooked chicken & mozzarella cheese (grated),spread butter on bread slice & flip to make a sandwich. \n8. In frying pan,place sandwich,cover & toast on low flame from both sides until golden brown.'
  },

  {
    id: 3,
    title: 'Chicken Fajita Pasta',
    image: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/128650.jpg",
    description: 'Delicious and cheesy mouthwatering snack.',
    ingredients: ['3 tablespoons neutral oil', '3 chicken breasts, sliced', '1 red bell pepper, sliced', '1 green bell pepper, sliced', '1 yellow bell pepper, sliced', '1 yellow onion, sliced', '1 teaspoon salt', '1 teaspoon freshly ground black pepper', '1 tablespoon chili powder', '1 tablespoon cumin', '1 tablespoon garlic powder', '5 cups milk(1 ¼ L)', '4 cups penne pasta(400 g)', '1 cup pepper jack cheese(100 g), shredded'],
    method: '1. Heat the oil in a large pot over high heat. \n2. Add the chicken and cook until no longer pink, 5-6 minutes, then remove from the pot. \n3. Add the bell peppers and onion and cook until the onion is translucent, about 6 minutes. \n4. Add the chicken back to the pot, along with the salt, pepper, chili powder, cumin, and garlic powder, and stir until evenly coated, about 30 seconds. \n5. Add the milk and the penne, stirring constantly to prevent the pasta from sticking. \n6. Cook for about 20 minutes, until pasta is tender and the milk has reduced to a thick sauce that coats the pasta. \n7. Add the cheese and mix until melted.'
  },

  {
    id: 4,
    title: 'Chicken Cheese Rolls',
    image: "https://i.ytimg.com/vi/z7FTPPDtvds/maxresdefault.jpg",
    description: 'Bite-sized cheesy goodness.',
    ingredients: ['Cooking oil 2 tbs', 'Garlic chopped ½ tbs', 'Chicken boiled & shredded 250g', 'Corn boiled 1 & ¼ Cup', 'Red chilli crushed 1 & ½ tsp', 'Salt 1 tsp or to taste', 'Black pepper powder ½ tsp', 'Onion powder 1 tsp', 'Capsicum chopped ½ Cup', 'Cream ½ Cup', 'Hara pyaz (Spring onion) leaves chopped ½ Cup', 'Mozzarella cheese ½ Cup or as required', 'Cheddar cheese ½ Cup or as required', 'Maida (All-purpose flour) 1 & ½ tbs', 'Roll sheets as required', 'Cooking oil for frying'],
    method: '1. In a wok,add cooking oil,garlic & fry until light golden. \n2. Add chicken,corn kernels & mix well. \n3. Add red chilli crushed,salt,black pepper powder,onion powder,mix well & cook for 2-3 mins. \n4. Add capsicum & mix well. \n5. On low flame,add cream,spring onion,mix well & cook for a minute. \n6. Let it cool completely. \n7. Add mozzarella cheese,cheddar cheese,mix well & set aside. \n8. In a small bowl,add all-purpose flour,water & whisk well.Flour slurry is ready! \n9. Take a roll sheet,add prepared filling in the center,fold both sides,apply flour slurry & roll up. \n10. In wok,heat cooking oil & fry on medium flame until golden & crispy. \n11. Serve with tomato ketchup! '
  },

  
  // Add more recipe objects here...
];

const Recipe = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
  },
});

export default Recipe;
