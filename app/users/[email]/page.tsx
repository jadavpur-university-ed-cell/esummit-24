"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const UserSchema = z.object({
  name: z.string().nonempty("Name is required"),
  college: z.string().nonempty("College is required"),
  year: z.string().nonempty("Year is required"),
  branch: z.string().nonempty("Branch is required"),
  image: z.string().nullable(),
  shirtSize: z.string().nonempty("Shirt size is required"),
  gender: z.string().nonempty("Gender is required"),
  foodPreference: z.string().nonempty("Food preference is required"),  
});

type FormFields = z.infer<typeof UserSchema>;

cconst RegisterDetailsPage = ({ params }: { params: { email: string } }) => {
  const router = useRouter();
  const { email } = params;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(UserSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setLoading(true);
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (user) {
        await prisma.user.update({
          where: { email },
          data,
        });
        // Redirect to the profile page using the email
        router.push(`/users/${email}`);
      } else {
        console.error("User not found");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-black text-yellow-300 flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl mb-4">Complete Your Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="p-2 rounded-md text-black"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            type="text"
            placeholder="College"
            {...register("college")}
            className="p-2 rounded-md text-black"
          />
          {errors.college && <p className="text-red-500">{errors.college.message}</p>}

          <input
            type="text"
            placeholder="Year"
            {...register("year")}
            className="p-2 rounded-md text-black"
          />
          {errors.year && <p className="text-red-500">{errors.year.message}</p>}

          <input
            type="text"
            placeholder="Branch"
            {...register("branch")}
            className="p-2 rounded-md text-black"
          />
          {errors.branch && <p className="text-red-500">{errors.branch.message}</p>}

          <input
            type="text"
            placeholder="Shirt Size"
            {...register("shirtSize")}
            className="p-2 rounded-md text-black"
          />
          {errors.shirtSize && <p className="text-red-500">{errors.shirtSize.message}</p>}

          <input
            type="text"
            placeholder="Gender"
            {...register("gender")}
            className="p-2 rounded-md text-black"
          />
          {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}

          <input
            type="text"
            placeholder="Food Preference"  
            {...register("foodPreference")}
            className="p-2 rounded-md text-black"
          />
          {errors.foodPreference && <p className="text-red-500">{errors.foodPreference.message}</p>}

          <button
            type="submit"
            className="mt-4 p-2 bg-orange-300 rounded-md"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterDetailsPage;
