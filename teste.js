const pt = [
    {
        nome: 'Pedro',
        dano: 50,
        heal: 9999999999,
        balance: -981385123
    },
    {
        nome: 'Hetas',
        dano: 0,
        heal: 192,
        balance: 1247756
    },
    {
        nome: 'Enginer',
        dano: 199,
        heal: 19283123,
        balance: -12354
    },
    {
        nome: 'fraga',
        dano: 130,
        heal: 19283,
        balance: 12345
    }
]

const maiorDano = () => pt.reduce(((acc, cur) => cur.dano > acc.dano ? cur : acc));
const menorDano = () => pt.reduce(((acc, cur) => cur.dano < acc.dano ? cur : acc));
const maiorHealing = () => pt.reduce(((acc, cur) => cur.heal > acc.heal ? cur : acc));
const negativados = () => pt.filter((membros) => membros.balance < 0 ? true : false);
const []
console.log(...negativados())

