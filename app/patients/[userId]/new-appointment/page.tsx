import Image from "next/image";
import {AppointmentForm} from "@/components/forms/AppointmentForm";

const NewAppointment = () => {
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[860px] flex-1 justify-between">
                    <Image
                        src={"/assets/icons/logo-full.svg"}
                        height={1000}
                        width={1000}
                        alt={"patient"}
                        className="mb-12 h-10 w-fit"
                    />

                    <AppointmentForm />

                    <p className="copyright py-12">
                        © 2024 CarePulse
                    </p>
                </div>
            </section>

            <Image
                src={"/assets/images/appointment-img.png"}
                alt={"appointment"}
                width={1000}
                height={1000}
                className="side-img max-w-[390px] bg-bottom"
            />
        </div>
    );
}
export default NewAppointment;