import { useForm } from 'react-hook-form';
import {
  type ClientCreateOutput,
  ClientCreateSchema,
  type ClientCreateInput,
  type ClientCreateFormData,
} from '@/server/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

type ClientFormProps = {
  onSubmit: (data: ClientCreateInput) => void;
  initialData?: Partial<ClientCreateOutput>;
};

export default function ClientForm({ onSubmit, initialData }: ClientFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ClientCreateFormData, unknown, ClientCreateInput>({
    resolver: zodResolver(ClientCreateSchema),
    defaultValues: initialData,
  });

  const handlerFormSubmit = async (data: ClientCreateInput) => {
    await onSubmit(data);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handlerFormSubmit)}
      className="space-y-4 text-black"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          {...register('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register('email')}
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Teléfono
        </label>
        <input
          {...register('phone')}
          type="tel"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Empresa
        </label>
        <input
          {...register('company')}
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Estado
        </label>
        <select
          {...register('status')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option value="active">Activo</option>
          <option value="inactive">Inactivo</option>
        </select>
        {errors.status && (
          <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          {...register('password')}
          type="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Guardando...' : 'Guardar cliente'}
      </button>
    </form>
  );
}
