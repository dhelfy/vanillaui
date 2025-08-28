import axios from "axios"
import { createHighlighter } from 'shiki'

export const fetchComponents = async () => {
  try {
    const result = await axios.get("https://raw.githubusercontent.com/dhelfy/vnlui-cmpnnts/refs/heads/main/components/meta.json")
    return result.data
  } catch (error) {
    throw new Error("Failed to load components")
  }
}

export const fetchComponentByID = async (id: string, name: string) => {
  try {
    const base = `https://raw.githubusercontent.com/dhelfy/vnlui-cmpnnts/refs/heads/main/components/${id}/${name}`;

    const [jsxRes, tsxRes, cssRes] = await Promise.all([
      axios.get(`${base}.jsx`),
      axios.get(`${base}.tsx`),
      axios.get(`${base}.module.css`)
    ]);

    return {
      name,
      files: {
        jsx: jsxRes.data,
        tsx: tsxRes.data,
        css: cssRes.data
      }
    };
  } catch (error) {
    throw new Error("Failed to load information")
  }
}