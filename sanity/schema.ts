import { type SchemaTypeDefinition } from "sanity";
import special from "./schema/special";
import menu from "./schema/menu";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [special, menu],
};
