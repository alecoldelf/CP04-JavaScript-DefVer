import cats from "cat-ascii-faces";
import chalk from "chalk";

export default function coolsolelog(msg) {
    return chalk.magenta.bgYellow(`  ${cats()} Olá humano, você tem uma miausagem nova!
    ^-----------------------------------------^ 
    |                                         | 
    |                                         | 
    |            o               o            | 
   <        =           w            =         >         
    |                                         |          
    [v]                                     [v] 
    ----  ${msg}                                                           
    `);
}