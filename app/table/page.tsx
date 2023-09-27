"use client";

import React, { Suspense, useState } from "react";
import { IRecipe } from "@/interface";
import RecipeTable from "@/components/RecipeTable/RecipeTable";
import ClientOnly from "@/components/ClientOnly/ClientOnly";

const defaultRecipe: IRecipe[] = [
  {
    id: 0,
    name: "Ragga Muffin",
    type: "Breakfast",
    time: "35 min",
    serves: "2",
  },
  { id: 1, name: "Rasta Salata", type: "Vegan", time: "25 min", serves: "4" },
  { id: 2, name: "Green Pork", type: "Lunch", time: "90 min", serves: "6" },
];

export default function Table() {
  const [recipe, setRecipe] = useState<IRecipe[]>(defaultRecipe);

  return (
    <div className="p-2 w-full overflow-scroll">
      <Suspense
        fallback={<div className="border text-black h-10 w-20">Hekklo</div>}
      >
        <ClientOnly>
          <RecipeTable recipe={recipe} setRecipe={setRecipe} />
        </ClientOnly>
      </Suspense>
    </div>
  );
}
