const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [
        {
          name: "Robert",
          children: [],
        },
      ],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

function printChildren(tree) {
  if (tree.children.length === 0) return;
  tree.children.forEach((child) => {
    console.log(child.name);
    printChildren(child); // what this will is that it will console log each child's name in the array as long as the array is not empty in each iteration
  });
}
