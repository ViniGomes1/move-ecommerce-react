import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';

function CartDrawer() {
  const {
    cart,
    subtotal,
    shipping,
    total,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    checkout,
    lastOrder,
  } = useCart();

  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#183a33]/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-[#f5f7f6] shadow-2xl">
                    <div className="flex items-center justify-between border-b border-[#15342d]/10 px-5 py-4">
                      <div>
                        <Dialog.Title className="text-xl font-black text-[#15342d]">Carrinho</Dialog.Title>
                        <p className="text-sm text-[#183a33]/60">{cart.length} item(s)</p>
                      </div>

                      <button type="button" onClick={closeCart} className="rounded-full p-2 text-[#15342d] hover:bg-[#15342d]/5">
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>

                    {lastOrder && (
                      <div className="border-b border-[#15342d]/10 bg-[#eafaf1] px-5 py-4 text-sm text-[#15342d]">
                        <p className="font-bold uppercase tracking-[0.18em] text-[#317567]">Pedido confirmado</p>
                        <p className="mt-2">Pedido {lastOrder.orderId} em {lastOrder.date}</p>
                      </div>
                    )}

                    <div className="flex-1 space-y-4 px-5 py-5">
                      {cart.length === 0 ? (
                        <div className="rounded-[24px] border border-dashed border-[#15342d]/20 bg-white p-6 text-center">
                          <p className="text-lg font-bold text-[#15342d]">Seu carrinho está vazio</p>
                          <p className="mt-2 text-sm text-[#183a33]/65">Adicione alguns produtos para continuar.</p>
                        </div>
                      ) : (
                        cart.map((item) => (
                          <div key={`${item.id}-${item.size}-${item.color}`} className="rounded-[24px] bg-white p-3 shadow-sm">
                            <div className="flex gap-3">
                              <img src={item.image} alt={item.name} className="h-20 w-20 rounded-2xl object-cover" />
                              <div className="flex-1">
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <p className="font-bold text-[#15342d]">{item.name}</p>
                                    <p className="text-xs uppercase tracking-[0.14em] text-[#183a33]/55">
                                      {item.color} · {item.size}
                                    </p>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => removeItem(item.id, item.size, item.color)}
                                    className="text-xs font-semibold uppercase tracking-[0.12em] text-[#15342d]/60"
                                  >
                                    Remover
                                  </button>
                                </div>

                                <div className="mt-3 flex items-center justify-between">
                                  <div className="flex items-center rounded-full border border-[#15342d]/15 bg-[#f6f8f7]">
                                    <button
                                      type="button"
                                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                                      className="h-8 w-8 text-lg text-[#15342d]"
                                    >
                                      −
                                    </button>
                                    <span className="w-8 text-center text-sm font-semibold text-[#15342d]">{item.quantity}</span>
                                    <button
                                      type="button"
                                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                                      className="h-8 w-8 text-lg text-[#15342d]"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <p className="font-bold text-[#15342d]">
                                    {(item.price * item.quantity).toLocaleString('pt-BR', {
                                      style: 'currency',
                                      currency: 'BRL',
                                    })}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {cart.length > 0 && (
                      <div className="border-t border-[#15342d]/10 bg-white p-5">
                        <div className="space-y-2 text-sm text-[#183a33]/75">
                          <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Entrega</span>
                            <span>{shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                          </div>
                          <div className="flex justify-between border-t border-[#15342d]/10 pt-2 text-base font-bold text-[#15342d]">
                            <span>Total</span>
                            <span>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={checkout}
                          className="mt-5 w-full rounded-full bg-[#15342d] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#103128]"
                        >
                          Finalizar compra
                        </button>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default CartDrawer;
