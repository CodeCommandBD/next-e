import { twMerge } from "tailwind-merge";

interface Props {
    amount: number;
    className?: string;
}

const PriceFormate = ({amount, className}:Props) => {
    const formattedPrice = new Number(amount).toLocaleString('en-us',{
        style:'currency',
        currency: 'USD',
        minimumFractionDigits:2,

    })
  return (
    <span className={twMerge( 'font-medium' ,className)}>
        {formattedPrice}
    </span>
  )
}

export default PriceFormate