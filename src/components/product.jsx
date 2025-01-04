import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const price = 150000;

export default function Product() {
  return (
    <div className="grid grid-cols-2 justify-center border-b">
      <div className="">
        <img src="src/assets/pizza.jpg" alt="pizza" />
      </div>
      <div className="py-10 px-5 max-w-[350px]">
        <p className="text-xl text-sky-600">
          <span>قیمت : </span>
          <span className="">{price.toLocaleString()}</span>
        </p>
        <div className="mt-10 mb-2 flex gap-5">
          <div>
            <p className="mb-2">اندازه : </p>
            <Select>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="اندازه" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">کوچک</SelectItem>
                <SelectItem value="medium">متوسط</SelectItem>
                <SelectItem value="large">بزرگ</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="mb-2">تعداد : </p>
            <Select defaultValue={1}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="تعداد" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className="w-full bg-sky-600">افزودن به سبد خرید</Button>
        <div>
          <p className="border-b font-bold py-5 mt-5">پیتزا استیک (یک نفره )</p>
          <p className="font-bold text-sm mt-5">ترکیبات :</p>
          <p className="text-sm mt-2">خمیر کلاسیک 26 سانتی متری، فیله گوشت، پنیر، قارچ، فلفل دلمه ای، سس کچاپ مخصوص</p>
        </div>
      </div>
    </div>
  );
}
