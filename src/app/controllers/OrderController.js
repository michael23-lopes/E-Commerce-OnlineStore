const LoadProductService = require('../services/LoadProductService');
const User = require('../models/User');

const mailer = require('../../lib/mailer');

const email = (seller, product, buyer) => `
<h2 style="font-size: 24px; font-weight: normal;">Olá ${seller.name}</h2>
<br>
<p>
    Você tem um novo pedido de compra do seu produto
</p>
<p style="text-align: center;">
   Produto: ${product.name} <br>
   preço:${product.formattedPrice} <br>
</p><br><br>

<h3>Dados do comprador:</h3>
<p style="text-align: center;">
Nome: ${buyer.name}<br>
Email: ${buyer.email}<br>
Endereço: ${buyer.address}<br>
Cep: ${buyer.cep}<br>
</p><br><br>
<p><strong>Entre em contato com o comprador para finalizar a venda!</strong></p>

<p style="padding-top:16px; border-top: 2px solid #ccc">Agradecemos a preferencia!</p>
<p>Equipe OnlineStore.</p>
`;

module.exports = {
  async post(req, res) {
    try {
      const product = await LoadProductService.load('product', {
        where: {
          id: req.body.id,
        },
      });

      const seller = await User.findOne({ where: { id: product.user_id } });

      const buyer = await User.findOne({ where: { id: req.session.userId } });

      await mailer.sendMail({
        to: seller.email,
        from: 'no-replay@onelinestore.com',
        subject: 'Pedido de compra',
        html: email(seller, product, buyer),
      });

      return res.render('orders/success');
    } catch (err) {
      console.log(err);
      return res.render('orders/error');
    }
  },
};
