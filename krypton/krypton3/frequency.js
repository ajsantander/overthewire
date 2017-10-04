const fs = require('fs');

// const text = `QVJDB MEDGB QJJSG WQGZS NSZBN WUXBN JDSYS NCBWU MNICI STBUJ ACBEN QYDSN UQENS SJDQJ UDQFS UYSQN SKQUS WMZQJ SWQJJ DSFCG EUGSK UZDBB VCGUJ NQJXB NWQXN SSUZD BBVZD QNJSN SWCGQ ABMJQ HMQNJ SNBXQ TCVSX NBTDC UDBTS ENQTT QNUZD BBVUI QNCSW CGHMQ VCJLW MNCGE JDSSV CPQAS JDQGS NQAMJ JDSZM NNCZM VMTKQ UWCZJ QJSWA LVQKJ DNBME DBMJS GEVQG WQGWJ DSUZD BBVKB MVWDQ ISYNB ICWSW QGCGJ SGUCI SSWMZ QJCBG CGVQJ CGENQ TTQNQ GWJDS ZVQUU CZUQJ JDSQE SBXUD QFSUY SQNST QNNCS WJDSL SQNBV WQGGS DQJDQ KQLJD SZBGU CUJBN LZBMN JBXJD SWCBZ SUSBX KBNZS UJSNC UUMSW QTQNN CQESV CZSGZ SBGGB ISTAS NJKBB XDQJD QKQLU GSCED ABMNU YBUJS WABGW UJDSG SOJWQ LQUUM NSJLJ DQJJD SNSKS NSGBC TYSWC TSGJU JBJDS TQNNC QESJD SZBMY VSTQL DQISQ NNQGE SWJDS ZSNST BGLCG UBTSD QUJSU CGZSJ DSKBN ZSUJS NZDQG ZSVVB NQVVB KSWJD STQNN CQESA QGGUJ BASNS QWBGZ SCGUJ SQWBX JDSMU MQVJD NSSJC TSUQG GSUYN SEGQG ZLZBM VWDQI SASSG JDSNS QUBGX BNJDC UUCOT BGJDU QXJSN JDSTQ NNCQE SUDSE QISAC NJDJB QWQME DJSNU MUQGG QKDBK QUAQY JCUSW BGTQL JKCGU UBGDQ TGSJQ GWWQM EDJSN RMWCJ DXBVV BKSWQ VTBUJ JKBLS QNUVQ JSNQG WKSNS AQYJC USWBG XSANM QNLDQ TGSJW CSWBX MGFGB KGZQM USUQJ JDSQE SBXQG WKQUA MNCSW BGQME MUJQX JSNJD SACNJ DBXJD SJKCG UJDSN SQNSX SKDCU JBNCZ QVJNQ ZSUBX UDQFS UYSQN SMGJC VDSCU TSGJC BGSWQ UYQNJ BXJDS VBGWB GJDSQ JNSUZ SGSCG ASZQM USBXJ DCUEQ YUZDB VQNUN SXSNJ BJDSL SQNUA SJKSS GQGWQ UUDQF SUYSQ NSUVB UJLSQ NUACB ENQYD SNUQJ JSTYJ CGEJB QZZBM GJXBN JDCUY SNCBW DQISN SYBNJ SWTQG LQYBZ NLYDQ VUJBN CSUGC ZDBVQ UNBKS UDQFS UYSQN SUXCN UJACB ENQYD SNNSZ BMGJS WQUJN QJXBN WVSES GWJDQ JUDQF SUYSQ NSXVS WJDSJ BKGXB NVBGW BGJBS UZQYS YNBUS ZMJCB GXBNW SSNYB QZDCG EQGBJ DSNSC EDJSS GJDZS GJMNL UJBNL DQUUD QFSUY SQNSU JQNJC GEDCU JDSQJ NCZQV ZQNSS NTCGW CGEJD SDBNU SUBXJ DSQJN SYQJN BGUCG VBGWB GRBDG QMANS LNSYB NJSWJ DQJUD QFSUY SQNSD QWASS GQZBM GJNLU ZDBBV TQUJS NUBTS JKSGJ CSJDZ SGJMN LUZDB VQNUD QISUM EESUJ SWJDQ JUDQF SUYSQ NSTQL DQISA SSGST YVBLS WQUQU ZDBBV TQUJS NALQV SOQGW SNDBE DJBGB XVQGZ QUDCN SQZQJ DBVCZ VQGWB KGSNK DBGQT SWQZS NJQCG KCVVC QTUDQ FSUDQ XJSCG DCUKC VVGBS ICWSG ZSUMA UJQGJ CQJSU UMZDU JBNCS UBJDS NJDQG DSQNU QLZBV VSZJS WQXJS NDCUW SQJD`;
const text = fs.readFileSync('./in', 'utf8');

const alphabet        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const orderedAlphabet = 'ETAOINSHRDLCUMWFGYPBVKJXQZ';
const charFrequencies = {
  A: 8.167, B: 1.492, C: 2.782, D: 4.253, E: 12.702, F: 2.228, G: 2.015, H: 6.094, I: 6.966, J: 0.153, K: 0.772,
  L: 4.025, M: 2.406, N: 6.749, O: 7.507, P: 1.929, Q: 0.095, R: 5.987, S: 6.327, T: 9.056, U: 2.758, V: 0.978,
  W: 2.360, X: 0.150, Y: 1.974, Z: 0.074
};

const frequencies = characterFrequencies(text);
orderFrequencies(frequencies);
substituteWithMappings(text, getMapping('ABCDEFGHIJKLMNOPaReTUVWXYZ'));

// ----------------------------------
// Analysis
// ----------------------------------

function getMapping(mappingAlphabet) {
  const mapping = {};
  for(let i = 0; i < 26; i++) {
    const src = alphabet.substr(i, 1);
    const tar = mappingAlphabet.substr(i, 1);
    mapping[src] = tar;
  }
  return mapping;
}

function substituteWithMappings(text, mapping) {
  for(let i = 0; i < alphabet.length; i++) {
    const src = alphabet[i];
    const tar = mapping[src];
    text = text.replace(new RegExp(src, 'g'), tar);
  }
  console.log(text);
  return text;
}

// Uses a set of frequencies to produce a mapping based on the ordered set of frequencies
function orderFrequencies(frequencies) {
  let chars = alphabet;
  let mapping = {};
  let charIdx = 0;
  while(chars.length > 0) { // while there are chars to sort
    let max = 0;
    let maxIdx = 0;
    let maxChar = '';
    for(let i = 0; i < chars.length; i++) { // sweep chars searching for biggest freq
      const char = chars.substr(i, 1);
      const val = frequencies[char];
      if(val > max) {
        max = val;
        maxChar = char;
        maxIdx = i;
      }
    }
    // remove maxChar from chars
    chars = chars.replace(new RegExp(maxChar, 'g'), '');
    // create mapping
    const mappedChar = orderedAlphabet.substr(charIdx, 1);
    charIdx++;
    mapping[mappedChar] = maxChar.toLowerCase();
    console.log(`[${maxChar}] -> [${mappedChar}] (${max})`);
  }
  return mapping;
}

// Sweeps the alphabet counting the percentage of occurrence of each character in text.
// Returns {a: number, b: number, ...}
function characterFrequencies(text) {
  const frequencies = {};
  const strlen = text.length;
  for(let i = 0; i < alphabet.length; i++) {
    const char = alphabet.substr(i, 1);
    const freq = 100 * countOcurrences(char, text) / strlen;
    const stdFreq = charFrequencies[char];
    console.log(`[${char}]: ${freq} (${stdFreq})`);
    frequencies[char] = freq;
  }
  return frequencies;
}

// Counts occurrences of a target string in some text.
function countOcurrences(target, text) {
  return text.match(new RegExp(target, 'g') || []).length;
}

// ----------------------------------
// Rotation
// ----------------------------------

function bruteForceRotate(text) {
  for(let i = 0; i < 26; i++) {
    console.log(`${i}: ----------------------------------------------------------------------------`);
    console.log(`${rotateText(text, i)}`);
  }
}

function rotateText(text, offset) {
  const chars = text.split('');
  let rotatedText = '';
  for(let i = 0; i < chars.length; i++) {
    const char = chars[i];
    rotatedText += rotateChar(char, offset);
  }
  return rotatedText;
}

function rotateChar(char, offset) {
  if(offset < 0) offset = 26 + offset;
  const idx = alphabet.indexOf(char);
  if(idx === -1) return '';
  const trIdx = (idx + offset) % 26;
  return alphabet.substr(trIdx, 1);
}