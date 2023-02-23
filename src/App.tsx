import { Mail, Loader2 } from "lucide-react";
import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
const App = () => {
  return (
    <div className="container mx-auto mt-10 max-w-2xl">
      <Button variant={"subtle"} fullWidth>
        من یک دکمه هستم
      </Button>
      <br />
      <br />
      <Button variant={"ghost"}>من یک دکمه هستم</Button>
      <br />
      <br />
      <Button variant={"outline"}>من یک دکمه هستم </Button>
      <br />
      <br />
      <Button variant={"subtle"}>من یک دکمه هستم </Button>
      <br />
      <br />
      <Button variant={"link"}>من یک دکمه هستم </Button>
      <br />
      <br />
      <Button variant={"danger"}>من یک دکمه هستم </Button>
      <br />
      <br />
      <div className="flex w-full max-w-sm items-center space-x-2 ">
        <Button>
          <Mail className="ml-2 h-4 w-4" />
          ثبت نام با ایمیل
        </Button>
      </div>

      <br />
      <br />
      <div className="flex w-full max-w-sm items-center space-x-2 ">
        <Button disabled>
          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          لطفا منتظر بمانید
        </Button>
      </div>
      <br />
      <br />

      <Input type="email" placeholder="ایمیل را وارد کنید ..." />
      <br />
      <br />

      <Input disabled type="email" placeholder="ایمیل را وارد کنید ..." />
      <br />
      <br />
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="email">ایمیل</Label>
        <Input type="email" id="email" placeholder="ایمیل ار وارد کنید ..." />
      </div>
      <br />
      <br />
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="email-2">ایمیل</Label>
        <Input type="email" id="email-2" placeholder="ایمیل را وارد کنید ..." />
        <p className="text-sm text-slate-500 mt-2">ایمیل خود را وارد کنید .</p>
      </div>
      <br />
      <br />
      <div className="flex w-full max-w-sm items-center space-x-2 gap-x-2">
        <Input type="email" placeholder="ایمیل خود را وارد کنید ..." />
        <Button type="submit">تایید </Button>
      </div>
    </div>
  );
};

export default App;
