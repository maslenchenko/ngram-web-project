const heading1 = "WHAT ARE N-GRAMS?";
const heading2 = "HOW TO CALCULATE PROBABILITY OF THE NEXT WORD?";
const heading3 = "WHAT IS SMOOTHING?";
const heading4 = "KNESER-NEY SMOOTHING";

const text1 =
  'N-grams are a set of words that occur together in a sequence. For example, the sentence "I love to code" contains the following 2-grams: "I love", "love to", and "to code".';
const text2 =
  'The probability of the next word is calculated by dividing the number of times the n-gram occurs in the corpus by the number of times the n-1-gram occurs in the corpus. For example, the probability of the word "code" in the sentence "I love to code" is calculated by dividing the number of times the 2-gram "to code" occurs in the corpus by the number of times the 1-gram "to" occurs in the corpus.';
const text3 =
  'Smoothing is a technique used to adjust the probability of the next word when the n-gram does not occur in the corpus. For example, the probability of the word "code" in the sentence "I love to code" is calculated by dividing the number of times the 2-gram "to code" occurs in the corpus by the number of times the 1-gram "to" occurs in the corpus. If the 2-gram "to code" does not occur in the corpus, then the probability of the word "code" is zero. Smoothing is used to adjust this probability to a non-zero value.';
const text4 =
  "Kneser-Ney smoothing is a technique used to adjust the probability of the next word when the n-gram does not occur in the corpus. It is a more advanced smoothing technique than the one used in this app.";

export { heading1, heading2, heading3, heading4, text1, text2, text3, text4 };
