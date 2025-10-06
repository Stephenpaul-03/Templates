import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function FunctionTesterCard() {
  useEffect(() => {
    const testFunctions = async () => {
      try {
        // GET
        const getRes = await fetch("/.netlify/functions/get-items");
        console.log("GET items:", await getRes.json());

        // POST
        const createRes = await fetch("/.netlify/functions/create-item", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: "Test Item", content: "Hello!" }),
        });
        console.log("POST create-item:", await createRes.json());

        // PATCH
        const updateRes = await fetch("/.netlify/functions/update-item", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: 1, title: "Updated Item" }),
        });
        console.log("PATCH update-item:", await updateRes.json());

        // DELETE
        const deleteRes = await fetch("/.netlify/functions/delete-item", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: 1 }),
        });
        console.log("DELETE delete-item:", await deleteRes.json());
      } catch (err) {
        console.error("Function test error:", err);
      }
    };

    testFunctions();
  }, []);

  return (
    <div className="fixed top-4 left-4 z-50 w-[25vw]">
      <Card className="border-2 text-center">
        <CardContent className="text-sm">
          <h2>Open console to see Netlify function responses.</h2>
          <h6>Expect <span className="text-green-500">200</span> and/or <span className="text-yellow-500">201</span></h6>
        </CardContent>
      </Card>
    </div>
  );
}
