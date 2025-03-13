import cats from "cat-ascii-faces";

export default function coolsolelog(msg) {
    return (`  ${cats()} Olá humano, você tem uma miausagem nova!
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