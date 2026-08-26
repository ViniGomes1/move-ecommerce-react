import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/home.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Events from './Pages/Events/Events.jsx';
import AboutPage from './Pages/AboutPage/AboutPage.jsx';
import AccountPage from './Pages/AccountPage/AccountPage.jsx';
import ProductPage from './Pages/ProductPage/ProductPage.jsx';
import InfoPage from './Pages/InfoPage/InfoPage.jsx';
import AdminPage from './Pages/AdminPage/AdminPage.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/shop',
				element: <Shop />,
			},
			{
				path: '/product/:id',
				element: <ProductPage />,
			},
			{
				path: '/events',
				element: <Events />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/sac',
				element: (
					<InfoPage
						title="SAC"
						subtitle="Estamos aqui para ajudar você antes, durante e depois da sua compra."
						intro="O atendimento da MOVE Co. foi pensado para responder com rapidez, clareza e gentileza. Se você tiver dúvidas sobre pedidos, trocas, produtos, frete ou qualquer outra questão, nossa equipe está disponível para orientar com atenção e praticidade."
						highlights={[
							{ title: 'Tempo de resposta', text: 'Respostas em até 24 horas úteis em dias corridos.' },
							{ title: 'Atendimento humano', text: 'Equipe especializada em suporte e experiência de compra.' },
							{ title: 'Canal rápido', text: 'Fale conosco por WhatsApp, e-mail ou telefone.' },
						]}
						details={[
							{ title: 'WhatsApp', text: 'Atendimento direto com equipe de suporte, prático para dúvidas rápidas.' },
							{ title: 'E-mail', text: 'sac@moveco.com.br · respostas em até 1 dia útil.' },
							{ title: 'Telefone', text: '(11) 4000-1234 · segunda a sábado, das 9h às 18h.' },
						]}
						bullets={['Atendimento para dúvidas sobre pedidos', 'Suporte para trocas e devoluções', 'Orientação sobre produtos e tamanhos', 'Assistência pós-venda']}
						cta="Dúvidas sobre seu pedido? Nos chame pelo WhatsApp e receba uma resposta prática em minutos."
					/>
				),
			},
			{
				path: '/transport',
				element: (
					<InfoPage
						title="Transporte e entrega"
						subtitle="Entregas planejadas para você receber seu MOVE com rapidez e segurança."
						intro="A MOVE Co. trabalha com parceiros logísticos para entregar seu pedido com cuidado, transparência e prazos claros. Você acompanha todo o processo e pode consultar o status da sua entrega pelo e-mail ou WhatsApp."
						highlights={[
							{ title: 'Prazo médio', text: 'Entre 3 e 7 dias úteis para regiões metropolitanas.' },
							{ title: 'Rastreamento', text: 'Acompanhe seu pedido em tempo real com código de rastreio.' },
							{ title: 'Entrega segura', text: 'Produtos embalados com cuidado para evitar danos no transporte.' },
						]}
						details={[
							{ title: 'Frete padrão', text: 'Cobrado conforme a região e peso do pedido.' },
							{ title: 'Frete express', text: 'Entrega mais rápida disponível em regiões selecionadas.' },
							{ title: 'Retirada', text: 'Você também pode retirar em loja em parceria com o centro comercial.' },
						]}
						bullets={['Rastreamento em tempo real', 'Envio em até 48h após aprovação do pagamento', 'Entrega em embalagem protegida', 'Suporte para endereço ou data de entrega']}
						cta="Em pedidos acima de R$ 250, o frete para algumas capitais pode ser incluso para facilitar sua compra."
					/>
				),
			},
			{
				path: '/payment',
				element: (
					<InfoPage
						title="Pagamento"
						subtitle="Compras práticas, seguras e com opções que se adaptam ao seu perfil."
						intro="A MOVE Co. simula uma experiência de compra moderna com métodos conhecidos e transparência em cada etapa. Você pode finalizar a compra com pagamentos digitais, boleto ou cartão de crédito, sempre com a confirmação clara do valor total."
						highlights={[
							{ title: 'Cartão', text: 'Pagamento com cartão em até 3 vezes sem juros no checkout simulado.' },
							{ title: 'Boleto', text: 'Opção disponível para pagamento à vista com boleto bancário.' },
							{ title: 'Segurança', text: 'Processo simulado para demonstração front-end com foco em UX.' },
						]}
						details={[
							{ title: 'Pagamento digital', text: 'Confirmado imediatamente após a finalização da compra.' },
							{ title: 'Boleto bancário', text: 'Prazo de compensação em até 3 dias úteis.' },
							{ title: 'Parcelamento', text: 'Disponibilidade conforme valor do pedido e método escolhido.' },
						]}
						bullets={['Pagamento por cartão', 'Boleto bancário', 'Parcelamento em até 3x', 'Confirmação automática da compra']}
						cta="Em uma loja real, esse fluxo seria integrado ao gateway de pagamento escolhido pela marca."
					/>
				),
			},
			{
				path: '/admin',
				element: <AdminPage />,
			},
			{
				path: '/account',
				element: <AccountPage />,
			},
			{
				path: '/admin',
				element: <AdminPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>
);
