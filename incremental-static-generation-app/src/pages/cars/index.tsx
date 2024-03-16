import { CustomDiv } from "@/components/CustomDiv";
import { CustomUl } from "@/components/CustomUl";
import { inter } from "@/fonts";
import Link from "next/link";


interface Props {
    cars: Car[]
}

export default function Cars({ cars }: Props) {
    return (
        <CustomDiv className={inter.className}>
            {cars.map((car) =>
            (
                <CustomUl style={{ fontSize: 30, display: 'flex' }} key={car.id}>
                    <Link href={`/cars/${car.id}`}>
                        <li>{car.id}. {car.make} {car.model} {car.year}</li>
                    </Link>
                </CustomUl>
            ))}
        </CustomDiv>
    )
}


export async function getStaticProps() {
    const response = await fetch("http://localhost:4000/cars")
    let cars = await response.json()

    return {
        props:
        {
            cars: cars
        },
        revalidate: 5
    }
}