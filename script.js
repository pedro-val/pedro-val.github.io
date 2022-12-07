//calculo do profit para cada player

const button = document.getElementById('button');
button.addEventListener('click', () => {
    const arrayDoAnalyzer = document.getElementById('input-value').value.split(/\r?\n?\t|\r|\n|\t/g);

const lista = document.getElementById('lista');
const listaLi = document.getElementsByTagName('li');
const lootTotal = parseInt(arrayDoAnalyzer[3].match(/-?\d/g).map(Number).join(''));
const gastoTotal = parseInt(arrayDoAnalyzer[4].match(/-?\d/g).map(Number).join(''));
const profitTotal = parseInt(arrayDoAnalyzer[5].match(/-?\d/g).map(Number).join(''));

const pt = [
    {
        nome: arrayDoAnalyzer[6].replace('(Leader))', ''),
        loot: parseInt(arrayDoAnalyzer[7].match(/-?\d/g).map(Number).join('')),
        suplies: parseInt(arrayDoAnalyzer[8].match(/-?\d/g).map(Number).join('')),
        balance: parseInt(arrayDoAnalyzer[9].match(/-?\d/g).map(Number).join('')),
        dano: parseInt(arrayDoAnalyzer[10].match(/-?\d/g).map(Number).join('')),
        heal: parseInt(arrayDoAnalyzer[11].match(/-?\d/g).map(Number).join(''))
    },
    {
        nome: arrayDoAnalyzer[12].replace('(Leader))', ''),
        loot: parseInt(arrayDoAnalyzer[13].match(/-?\d/g).map(Number).join('')),
        suplies: parseInt(arrayDoAnalyzer[14].match(/-?\d/g).map(Number).join('')),
        balance: parseInt(arrayDoAnalyzer[15].match(/-?\d/g).map(Number).join('')),
        dano: parseInt(arrayDoAnalyzer[16].match(/-?\d/g).map(Number).join('')),
        heal: parseInt(arrayDoAnalyzer[17].match(/-?\d/g).map(Number).join(''))
    },
    {
        nome: arrayDoAnalyzer[18].replace('(Leader))', ''),
        loot: parseInt(arrayDoAnalyzer[19].match(/-?\d/g).map(Number).join('')),
        suplies: parseInt(arrayDoAnalyzer[20].match(/-?\d/g).map(Number).join('')),
        balance: parseInt(arrayDoAnalyzer[21].match(/-?\d/g).map(Number).join('')),
        dano: parseInt(arrayDoAnalyzer[22].match(/-?\d/g).map(Number).join('')),
        heal: parseInt(arrayDoAnalyzer[23].match(/-?\d/g).map(Number).join(''))
    },
    {
        nome: arrayDoAnalyzer[24].replace('(Leader))', ''),
        loot: parseInt(arrayDoAnalyzer[25].match(/-?\d/g).map(Number).join('')),
        suplies: parseInt(arrayDoAnalyzer[26].match(/-?\d/g).map(Number).join('')),
        balance: parseInt(arrayDoAnalyzer[27].match(/-?\d/g).map(Number).join('')),
        dano: parseInt(arrayDoAnalyzer[28].match(/-?\d/g).map(Number).join('')),
        heal: parseInt(arrayDoAnalyzer[29].match(/-?\d/g).map(Number).join(''))
    },
    {
        nome: arrayDoAnalyzer[30].replace('(Leader))', ''),
        loot: parseInt(arrayDoAnalyzer[31].match(/-?\d/g).map(Number).join('')),
        suplies: parseInt(arrayDoAnalyzer[32].match(/-?\d/g).map(Number).join('')),
        balance: parseInt(arrayDoAnalyzer[33].match(/-?\d/g).map(Number).join('')),
        dano: parseInt(arrayDoAnalyzer[34].match(/-?\d/g).map(Number).join('')),
        heal: parseInt(arrayDoAnalyzer[35].match(/-?\d/g).map(Number).join(''))
    },
];
    const maiorDano = () => pt.reduce(((acc, cur) => cur.dano > acc.dano ? cur : acc));
    const maiorHealing = () => pt.reduce(((acc, cur) => cur.heal > acc.heal ? cur : acc));
    const maiorWaste = () => pt.reduce(((acc, cur) => cur.suplies > acc.suplies ? cur : acc));
    const menorDano = () => pt.reduce(((acc, cur) => cur.dano < acc.dano ? cur : acc)); 
    const negativados = () => pt.filter((membros) => Math.sign(membros.balance) === -1 ? true : false);
    const nomesNegativos = () => {
            const negativos = negativados();
            let nomes = '';
            for (let i = 0; i < negativos.length; i += 1) {
                if (i === negativos.length -1) {
                    nomes += `${negativos[i].nome}.`
                } else {
                nomes += `${negativos[i].nome}, `
                }
            }
            return nomes;
    }
    
    const profitIndividual = profitTotal / 5;
    const [a,b,c,d,e] = pt;
    const granap1 = parseInt(profitIndividual + a.suplies - a.loot);
    const granap2 = parseInt(profitIndividual + b.suplies - b.loot);
    const granap3 = parseInt(profitIndividual + c.suplies - c.loot);
    const granap4 = parseInt(profitIndividual + d.suplies - d.loot);
    const granap5 = parseInt(profitIndividual + e.suplies - e.loot);

    listaLi[0].innerText = `O monstro da pt, destruidor de criaturas foi ${maiorDano().nome}, com ${maiorDano().dano} de damage total!`
    listaLi[1].innerText = `O Deus que mais salvou o heróico bonequinho que se enfiou no meio das criaturas foi ${maiorHealing().nome}, com uma cura total de ${maiorHealing().heal}!`
    listaLi[2].innerText = `O mais gastão da pt, que pesou no profit final foi ${maiorWaste().nome}, com um total de prejúizo de ${maiorWaste().suplies}.`
    listaLi[3].innerText = `O mais minguado, que todos tem pena, que falta ML, que bateu menos nas criaturas foi ${menorDano().nome}, com um daninho total de ${menorDano().dano}.`
    listaLi[4].innerText = `Os negativados dessa hunt foram: ${nomesNegativos()}`
    listaLi[5].innerText = `O jogador ${a.nome}, deve receber ${granap1}`;
    listaLi[6].innerText = `O jogador ${c.nome}, deve receber ${granap3}`;
    listaLi[7].innerText = `O jogador ${d.nome}, deve receber ${granap4}`;
    listaLi[8].innerText = `O jogador ${e.nome}, deve receber ${granap5}`;
    listaLi[9].innerText = `Hetai, paga geral ai! se fodeu! kkkk`;
    lista.style.display = 'flex';
    console.log(d.suplies)
});