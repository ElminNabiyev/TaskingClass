export async function getDatas() {
    const res=await fetch("https://northwind.vercel.app/api/categories")
    const data=await res.json()
    return data
  }