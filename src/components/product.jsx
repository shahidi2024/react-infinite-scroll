import { Button } from "@/components/ui/button"

export default function Product() {
  return (
    <div className="container mx-auto grid grid-cols-2">
      <div>
        <img src="src/assets/pizza.jpg" alt="pizza" />
      </div>
      <div>
        <p>قیمت : 158000</p>
        <div>
          <div>
            <p>اندازه : </p>
            <input type="text" />
          </div>
          <div>
            <p>تعداد : </p>
            <input type="text" />
          </div>
        </div>
        <Button className="w-1/2 bg-sky-600">افزودن به سبد خرید</Button>
        <div>
            
        </div>
      </div>
    </div>
  );
}
