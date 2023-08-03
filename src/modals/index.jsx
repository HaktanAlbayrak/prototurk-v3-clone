import { useModals } from '~/stores/modal/hooks';
import { modals as modalsRoutes } from '~/routes/modal';
import { modal } from '~/stores/modal/action';
import OpacityContent from '~/components/animated/opacity';
import AnimatedContent from '~/components/animated';
import { AnimatePresence } from 'framer-motion';

export default function Modals() {
  const modals = useModals();

  return (
    <OpacityContent className='fixed inset-0 z-[9999] bg-zinc-700/60 backdrop:blur px-4 md:px-0 flex items-center justify-center flex-wrap overflow-auto py-4'>
      <AnimatePresence>
        {modals.map((modalData) => {
          const current = modalsRoutes.find((m) => m.name === modalData.name);
          return (
            <AnimatedContent
              exitDelay={0.1}
              delay={0.1}
              key={modalData.name}
              className='bg-white dark:bg-zinc-900 min-w-full md:min-w-[400px] max-w-full grid rounded-md overflow-hidden shadow-lg hidden last:block'
            >
              <current.element
                destroy={modal.destroy}
                destroyAll={modal.destroyAll}
                modalData={modalData?.data}
              />
            </AnimatedContent>
          );
        })}
      </AnimatePresence>
    </OpacityContent>
  );
}
