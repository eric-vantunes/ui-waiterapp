import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63920b11a1691c160a1d1c55',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1670511106842-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '63920b11a1691c160a1d1c56'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1670513454516-coca-cola.png',
          'price': 5,
        },
        'quantity': 2,
        '_id': '63920b11a1691c160a1d1c57'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon = "🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon = "👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon = "✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
