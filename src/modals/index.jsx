import { useModals } from '~/stores/modal/hooks';
import { modals as modalsRoutes } from '~/routes/modal';
import { modal } from '~/stores/modal/action';

export default function Modals() {
  const modals = useModals();

  return (
    <div className='fixed inset-0 z-[9999] bg-zinc-700/60 backdrop:blur flex items-center justify-center flex-wrap overflow-auto py-4'>
      {modals.map((modalData) => {
        const current = modalsRoutes.find((m) => m.name === modalData.name);
        return (
          <div
            key={modalData.name}
            className='bg-white dark:bg-zinc-900 rounded-md min-w-[400px] max-w-full grid overflow-hidden shadow-lg hidden last:block'
          >
            <current.element
              destroy={modal.destroy}
              destroyAll={modal.destroyAll}
              modalData={modalData?.data}
            />
          </div>
        );
      })}
    </div>
  );
}
