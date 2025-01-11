const jokeHn = [
  "लड़का – तुम्हें पसंद करता हूँ। लड़की – कौन? लड़का – मैं। लड़की – कुछ भी! लड़का – कुछ नहीं, मैं तुमसे प्यार करता हूँ।",
  "मुह दिखाई पर पति ने पत्नी को गुलाब का फूल दिया, पत्नी बोली, “अरे वाह! गुलाब तो तुम रोज देते हो, आज क्या खास बात है?” पति – “आज गुलाब की कीमत २० रूपये है।”",
  "ग्राहक – आंटी, यह समोसा कितने का है? आंटी – बेटा, एक समोसा 10 रुपये का है। ग्राहक – एक समोसा? आंटी – हां! ग्राहक – तब तो एक ही खाऊंगा, दो क्यों?",
  "महिला – तुम हमेशा मेरी बात नहीं सुनते हो! पुरुष – नहीं, बस कभी-कभी सुनता हूँ। महिला – कब? पुरुष – जब तुम्हारी बातें समझ में आ जाती हैं।",
  "टीचर – बच्चे, तुमने आज स्कूल क्यों नहीं आए? बच्चा – बर्ड फ्लू हो गया था मैम! टीचर – तुम्हारे पास तो पंख भी नहीं हैं! बच्चा – अरे, अब वो पंख कहां से आए?",
  "लड़का – तुम बहुत खूबसूरत हो! लड़की – क्या बात कर रहे हो! लड़का – हां, तुम तो जैसे चमचमाती हुई बर्फ हो! लड़की – वाह, वो कैसे? लड़का – क्योंकि जैसे बर्फ बहुत जल्दी पिघल जाती है, वैसे ही तुम भी जल्दी इन्फ्लुएंस हो जाती हो!",
  "एक आदमी डॉक्टर के पास गया। आदमी – डॉक्टर, मुझे भूलने की बीमारी हो गई है। डॉक्टर – कब से? आदमी – कब से क्या?",
  "महिला – डॉक्टर, मेरे पति बहुत आलसी हो गए हैं। डॉक्टर – तो क्या तुमने कुछ किया? महिला – जी हां, मैंने उनकी आलसी आदतों को बदलने के लिए उन्हें हंसाने की कोशिश की। डॉक्टर – और फिर? महिला – अब वो और आलसी हो गए।",
  "शिक्षक – तुम्हारा होमवर्क क्यों नहीं किया? शिष्य – क्योंकि मुझे होमवर्क की याद ही नहीं आई। शिक्षक – तो फिर तुम्हारी याददाश्त क्यों खराब है? शिष्य – मुझे पता नहीं, हो सकता है इसीलिए होमवर्क न किया हो!",
  "बॉस – तुमने रिपोर्ट क्यों नहीं दी? कर्मचारी – सर, मैं रिपोर्ट पर काम कर रहा था। बॉस – तो फिर क्या काम खत्म हो गया? कर्मचारी – नहीं सर, काम शुरू ही नहीं किया!",
  "पति – तुम मुझसे प्यार करती हो न? पत्नी – हां, बिल्कुल। पति – फिर तो तुम मुझसे कुछ भी मांग सकती हो। पत्नी – अच्छा! तो मुझे 50% छुट्टियां मिल सकती हैं?",
  "ग्राहक – मुझे दो समोसे दो। दुकानदार – 20 रुपये लगेंगे। ग्राहक – 20 रुपये, क्या उसमें सोने की पत्तियां भी मिली हुई हैं? दुकानदार – नहीं, लेकिन आजकल सोने की कीमत देखकर पकोड़ी का भाव बढ़ा दिया है।",
  "लड़की – तुम मुझे पसंद करते हो? लड़का – हां, बहुत। लड़की – तो फिर क्यों नहीं कहते? लड़का – मुझे डर था, कहीं तुम मना ना कर दो!",
  "पप्पू – यार, तुमने कभी सच बोला है? कम्पू – हां, कभी-कभी। पप्पू – तो फिर तुम कैसे जानते हो कि यह झूठ है?",
  "टीचर – तुम स्कूल क्यों नहीं आए कल? बच्चा – मैंने आपको तो बताया था कि मैं बीमार था। टीचर – लेकिन तुम्हारी माँ तो कह रही थी कि तुम ठीक थे। बच्चा – जी, मम्मी को झूठ बोलने की आदत है!",
  "मास्टर – तुमने हिंदी में 90 अंक कैसे पाए? शिष्य – मास्टरजी, मेरे पास किताब नहीं थी। मास्टर – तो फिर कैसे पढ़ाई की? शिष्य – मैंने किताब के बारे में सब पढ़ा।",
  "टीचर – कॉपी क्यों नहीं की? बच्चा – सर, मैं अपनी मेहनत से काम करता हूँ! टीचर – बहुत अच्छा! बच्चा – हां, मैं परिश्रम करने का काम करता हूँ, कॉपी करने का नहीं!",
  "बच्चा – मम्मी, मुझे नया फोन चाहिए। मम्मी – तुम क्यों नया फोन चाहते हो? बच्चा – क्योंकि पुराने फोन में नेटवर्क खराब है। मम्मी – तो नए फोन में क्या मिलेगा? बच्चा – नए फोन में नेटवर्क ठीक मिलेगा, तो मुझे कॉल्स ठीक से मिलेंगी!",
  "ग्राहक – मुझे बर्फ चाहिए। दुकानदार – बर्फ तो पिघल जाएगी!",
  "टीचर – तुमने परीक्षा में कैसे अच्छे अंक पाए? बच्चा – क्योंकि मेरी किताब को मैंने पहले पढ़ा, फिर घर के सभी सदस्यों को भी पढ़ाया!",
  "सागर – मुझे आजकल बहुत भूख लगती है। पार्थ – तो फिर खाना क्यों नहीं खा लेते? सागर – घरवाले कहते हैं मैं 'स्टाइल' से खाता हूँ, इसलिए खा नहीं पाता!",
  "गोलू – मम्मी, मुझे एक कंप्यूटर चाहिए। मम्मी – क्यों? गोलू – ताकि मैं डाटा बैकअप ले सकूं। मम्मी – क्या?",
  "अध्यक्ष – तुम स्कूल क्यों नहीं आए? पप्पू – सर, तबीयत ठीक नहीं थी। अध्यक्ष – तो फिर ये कैसे स्कूल के फोटोज भेज रहे हो? पप्पू – सर, हॉलिडे का नाम था!",
  "पति – तुम मुझे क्यों नहीं समझती हो? पत्नी – तुम मुझे ऐसा क्यों समझते हो कि मैं नहीं समझती?",
  "शिखा – तुम कितने अच्छे हो, मुझे तुम्हारे जैसी एक सौम्य पत्नी चाहिए। गोलू – हां, लेकिन मैं तो केवल एक पत्नी ही चाहता हूँ!",
  "टीचर – तुम्हारे पास होमवर्क क्यों नहीं था? बच्चा – क्योंकि मेरा बिल्ली ने खा लिया! टीचर – वह कैसे? बच्चा – वो मेरे काम में मुझसे ज्यादा माहिर है!",
  "किसी ने पुछा – तुम्हारे पास इतने पैसे कहां से आए? मैंने कहा – मैं अपनी जिद को कभी मारता नहीं हूँ!",
  "पप्पू – तुम मुझे कभी सही तरीके से समझाओ ना! गोलू – तुम्हारी समझ की हालत ही खराब है!",
  "आधुनिक युग में लोग चाय के साथ 'मोटी किताबें' पढ़ते हैं!",
  "मास्टर जी ने पूछा – पंखी, कहाँ से आया है यह पेड़? पंखी – पेड़ का सवाल था या पंखी का?",
  "टीचर – बच्चे क्या तुम सब ठीक हो? बच्चे – हां सर! क्या हम ठीक हैं? टीचर – तुम लोग क्या समझते हो?",
  "बॉस – जब तुम्हारे पास काम नहीं था तो तुम क्या करते थे? कर्मचारी – सर, चाय पीते थे। बॉस – तो अब क्या करते हो? कर्मचारी – अब सर, चाय लेते हैं और काम देखते हैं!",
  "अच्छा खेल रहे थे लेकिन ज्यादा चॉकलेट खाना नहीं चाहिए!",
  "मास्टर जी ने पूछा – तुम कब स्कूल आए? छात्र – सर, कल आया था!",
  "गोलू – तुम मजाक क्यों करते हो? पप्पू – मजाक नहीं, ये असलियत है!",
];

module.exports = jokeHn;