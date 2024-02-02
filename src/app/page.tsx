'use client'
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { count, decrement, increment } from "./counter.slice";

export default function Home() {
  const countValue = useAppSelector(count);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col gap-4 items-center">
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span className="font-bold text-green-600 text-8xl">{countValue}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
    </>
  );
}
