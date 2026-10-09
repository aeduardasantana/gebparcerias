# GEB Parcerias — site público v1.0

Landing page **principal** do GEB Parcerias. Esta entrega deliberadamente **não inclui LPs individuais dos cinco produtos**.

## Estrutura comercial

- 5 ofertas: escola digital; unidade de bolsas; academia digital/universidade corporativa; vitrine educacional; licenciamento comercial de saúde digital.
- Escola profissionalizante: R$ 209/mês e R$ 239/mês; valores referenciais de fornecedor.
- Unidade de bolsas: sem taxa de entrada ou permanência no modelo informado; observar o regulamento.
- Universidade Corporativa: projeto empresarial OU academia digital para especialista/infoprodutor. Modelo informado sem comissão sobre vendas cobrada pela plataforma educacional, mas **taxas do intermediador de pagamento e outros custos podem existir**.
- Vitrine educacional: implantação personalizada GEB; cursos por fornecimento e valores sujeitos a atualização.
- Saúde digital: R$ 199 à vista ou 12 × R$ 19,90 **mais R$ 19,90/mês**, sujeito às condições vigentes.

Os nomes dos fornecedores não aparecem na página principal, conforme o planejamento estratégico. Informações completas deverão ser disponibilizadas antes de eventual contratação.

## Fluxo de interesse: funcional sem backend

Cada cartão abre um formulário pré-preenchido com a oportunidade. O formulário NÃO afirma que há cadastro persistido: prepara a mensagem para WhatsApp institucional (11 2110-5473) ou e-mail `parcerias@grupoeduardabispo.com.br`. O interessado **precisa confirmar o envio** no aplicativo aberto. `privacidade.html` descreve exatamente o funcionamento dessa versão. Nenhuma gravação em base externa está implementada.

Para ativar captação persistente e liberação de futuras LPs, será necessário backend (por exemplo Apps Script + Sheets, com gestão de segurança e políticas apropriadas), consentimento/aviso de privacidade e validação de acesso por servidor, não apenas esconder URLs do menu.

## Publicação

- Domínio: `https://gebparcerias.grupoeduardabispo.com.br/`
- Pasta de hospedagem indicada: `/public_html/gebparcerias/`
- Deploy: workflow `.github/workflows/deploy-locaweb.yml` (em `main`).
- GitHub Actions Secrets exigidos: `HOST`, `USER` e `PASS`.
- **Confirmar o `server-dir` conforme a raiz real do usuário FTP na Locaweb**. O caminho configurado assume acesso à raiz que contém `public_html`.

O workflow está preparado no pacote. Isso **não significa que o site foi enviado ao GitHub ou publicado na Locaweb**. O repositório deve ser criado/vinculado e os secrets configurados antes do primeiro deploy.

## Arquivos

- `index.html`: site principal responsivo, SEO, interações e cinco ofertas.
- `styles.css`: identidade visual, acessibilidade, adaptação mobile.
- `script.js`: menu mobile, filtros, diálogo de interesse e mensagens WhatsApp/e-mail.
- `privacidade.html`: aviso de dados da versão atual.
- `assets/geb-parcerias.svg`: logotipo original recebido.
- `assets/favicon.png`: ícone derivado do símbolo do logotipo recebido.
- `.github/workflows/deploy-locaweb.yml`: automação FTP.

## Verificações antes da publicação

1. Confirmar políticas comerciais e eventuais alterações de tarifas com fornecedores.
2. Conferir se o WhatsApp corporativo recebe mensagens em `wa.me/551121105473`.
3. Validar apontamento do domínio e pasta no painel da Locaweb.
4. Após o deploy, testar desktop, mobile, e-mail, WhatsApp, certificados e links.
5. Antes de usar ferramenta de analytics, CRM ou automações de dados, atualizar o aviso de privacidade.