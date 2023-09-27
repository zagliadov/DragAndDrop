"use client";
import { IRecipe } from "@/interface";
import React from "react";
import { Reorder } from "framer-motion";

interface IProps {
  recipe: IRecipe[];
  setRecipe: any;
}
export default function RecipeTable({ recipe = [], setRecipe }: IProps) {
  return (
    <div className="min-w-[800px]">
      <div className="flex flex-col w-full">
        <div className="flex flex-row border-b text-blue-700 border-blue-500">
          <div className="flex-initial p-2 text-transparent">=</div>
          <div className="w-1/5 p-2">Recipe Name</div>
          <div className="w-1/5 p-2">Meal Type</div>
          <div className="w-1/5 p-2">Prep. Time</div>
          <div className="w-1/5 p-2">Serves</div>
          <div className="w-1/5 p-2"></div>
          <div className="w-1/5 p-2"></div>
        </div>
        <Reorder.Group values={recipe} onReorder={setRecipe}>
          {recipe &&
            recipe.map((item: IRecipe) => {
              return (
                <Reorder.Item
                  value={item}
                  key={item?.id}
                  className="border-b border-blue-500 cursor-pointer"
                >
                  <div className="flex flex-row" key={item?.id}>
                    <div className="flex-initial p-2 text-blue-600">=</div>
                    <div className="w-1/5 p-2 font-medium text-blue-700">
                      {item?.name}
                    </div>
                    <div className="w-1/5 p-2 text-orange-500">{item?.type}</div>
                    <div className="w-1/5 p-2 text-orange-500">{item?.time}</div>
                    <div className="w-1/5 p-2 text-orange-500">
                      {item?.serves}
                    </div>
                    <div className="w-1/5 p-2">
                      <button className="uppercase bg-yellow-200 w-full text-blue-700 border border-black rounded shadow-2xl font-medium">
                        Edit recipe
                      </button>
                    </div>
                    <div className="w-1/5">
                      <button className="uppercase rotate-45 text-3xl text-red-600">
                        +
                      </button>
                    </div>
                  </div>
                </Reorder.Item>
              );
            })}
        </Reorder.Group>
      </div>
    </div>
  );
}
