import dynamic from "next/dynamic";

export const CategoryTemplates = {
    Card: dynamic(() => import('../Templates/Card')),
    CardNoName: dynamic(() => import('../Templates/CardNoName')),
    NoImage: dynamic(() => import('../Templates/CardNoImage')),
  };


