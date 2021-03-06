const menuList = [
  {
    name: "Forever",
    url: "https://www.youtube.com/watch?v=wog1R1d4zls",
  },
  {
    name: "Black mamba",
    url: "https://www.youtube.com/watch?v=ZeerrnuLi5E",
  },
  {
    name: "Next level",
    url: "https://www.youtube.com/watch?v=4TWR90KJl84",
  },
  {
    name: "Savage",
    url: "https://www.youtube.com/watch?v=WPdWvnAAurg",
  },
  {
    name: "Dream come true",
    url: "https://www.youtube.com/watch?v=H69tJmsgd9I",
  },
];

const memberInfo = [
  {
    leader: false,
    enName: "ningning",
    name: "닝닝",
    birth: "2002. 10. 23.",
    nation: "중국",
    thubmnail: "ningning_thumbnail.png",
    images: ["ningning1.jpg", "ningning_ai.jpg"],
    content: `
      <p>aespa 멤버 중 가장 긴 연습생 생활 만큼, 외국인 멤버임에도 딕션, 성량, 음역대[26], 음색, 라이브 안정성 등 여러 방면에서 기본기가 매우 탄탄하다. 약간의 허스키함이 섞인 힘있게 부드럽고 청량한 목소리가 특징으로, 중고음역대에서 강점을 보이고, 한국어 발음도 상당히 자연스럽다. 윈터와 함께 aespa 곡들의 고음 파트를 양분하는 멤버.</p>
      <p>눈꼬리가 살짝 올라간 고양이 눈이며, 큰 눈에 이어 삼백안으로 인해 신비로운 비주얼을 지녔다는 의견이 있다. 얼굴상 또한 시원하면서도 매력적인 고양이상이며 데뷔 전에는 귀엽고 사랑스러운 이미지가 강했지만, 데뷔 후 강한 스타일링을 잘 소화하고 있다. 다양한 헤어 스타일링도 매우 잘 소화한다. 블랙맘바 뮤직비디오에서 보여주었던 밝은 애쉬계열 머리에다 흑발에 중단발이 매우 잘 어울린다.</p>
      <p>호기심이 많고 활발하며 다소 엉뚱한 행동을 많이 한다.</p>
      <p>장난꾸러기 기질을 가지고 있지만 의외로 시치미 떼는 것은 잘 못하는 편이다. 라디오에 출연했을 당시 멤버들의 MBTI가 공개되지 않아 팬들이 알려달라는 문자를 굉장히 많이 보냈는데, MBTI 검사를 해 봤냐는 질문에 곧바로 해 봤다라고 답했다. 알고 보니 MBTI에 관련된 자체 컨텐츠가 공개될 예정이어서 멤버들이 안 해봤다고 시치미를 뗀 것인데, 닝닝이 얼떨결에 스포일러를 해 버린 것. 팬들에게는 고마운 스포요정이 되어 버렸다. 게다가 본인등판에서 161cm인 키를 PD가 조금 더 크다는 식으로 말해 주었으나, 그건 아니라고 일축한다든가.</p>
      <p>하얼빈 출신답게 추위에 강한 편이다. 오히려 추위보다는 더위를 많이 타고 땀도 많이 흘리는 타입인데, 추위를 많이 타는 윈터와 한 방을 쓰게 된 이후로는 체질이 바뀐 건지 추위를 타기 시작했다고.</p>
      <p>TMI 프로필에서 밝힌 취향
        <ul>
          <li>좋아하는 단어: 꽈배기</li>
          <li>좋아하는 동물: 호랑이, 고양이</li>
          <li>좋아하는 색깔: 보라색</li>
          <li>좋아하는 음식: 감자탕, 순댓국, 훠궈</li>
          <li>좋아하는 계절: 봄</li>
          <li>좋아하는 영화: 타이타닉</li>
        </ul>
      </p>
    `,
  },
  {
    leader: false,
    enName: "eiselle",
    name: "지젤",
    birth: "2000. 10. 30.",
    nation: "일본",
    thubmnail: "eiselle_thumbnail.png",
    images: ["eiselle.jpg", "eiselle_ai.jpg"],
    content: `
    <p>한국어 말투가 조곤조곤하지만 뜻하지 않게 개그가 튀어나와서 재밌는 캐릭터이다.</p>
    <p>특징있는 음색으로 곡에 있는 보컬 파트를 잘 소화한다. 곡의 포인트가 되는 파트를 카리나와 함께 맡는다. 고음이 뛰어나거나 성량이 큰 건 아니지만 특유의 음색이 돋보인다.</p>
    <p>랩을 하면 반전 매력의 모습을 보인다. 아는 형님 aespa 편에서 Doja Cat의 Tia Tamera (feat. Rico Nasty)를 선보였다. 평소에도 영어 실력이 굉장히 좋아서 이에 대해 좋아하는 사람들이 많았는데, 이 랩을 보고 호평을 하는 사람들도 굉장히 늘었다.</p>
    <p>여우상이라는 의견이 많으며 우아하고 시크한 느낌을 주는 외모지만 귀여운 컨셉도 잘 어울린다. 소속사 선배인 슈와 선데이를 닮아 지젤도 SM상의 계보를 잇는다는 의견들이 있다. 비주얼로 매우 유명했던 아이돌인 G.NA를 닮았다는 의견도 있다.</p>
    <p>아버지가 일본인이고 어머니가 한국인이다. 서울에서 태어나고 어릴 때부터 일본 도쿄에서 쭉 자랐다.</p>
    <p>TMI 프로필에서 공개한 취향
      <ul>
        <li>좋아하는 단어: 똑부러지는 단어, 똠얌꿍, 빠삐꼬, 쭈꾸미</li>
        <li>좋아하는 동물: 강아지</li>
        <li>좋아하는 색깔: 검은색</li>
        <li>좋아하는 음식: 단짠단짠, 어머니의 미역국</li>
        <li>좋아하는 계절: 가을</li>
        <li>좋아하는 영화: 데드풀</li>
      </ul>
    </p>
    `,
  },
  {
    leader: false,
    enName: "winter",
    name: "윈터",
    birth: "2001. 01. 01.",
    nation: "한국",
    thubmnail: "winter_thumbnail.png",
    images: ["winter1.jpg", "winter_ai.jpg"],
    content: `
    <p>팀 내 자타공인 분위기 메이커를 맡고 있다. 그룹이 전반적으로 밝고 텐션이 높지만, 본인이 먼저 나서서 그 역할을 담당하고 있다고 한다. 하지만 제법 낯을 가리는 성격이라고도 한다.</p>
    <p>목소리는 여린 편이지만, 보컬은 탄탄한 편이다. 윈터의 파트인 “에스파는 나야, 둘이 될 수 없어”는 Black Mamba의 킬링 파트로 자주 언급된다. 또한 SMP로 데뷔한 그룹답게 유영진이 Black Mamba의 디렉팅을 맡았는데, 윈터의 브릿지 파트에서 그의 색이 잘 느껴진다. </p>
    <p>정통 SMP 곡인 Next Level에서 고음과 브릿지 파트를 맡아 기량을 드러냈다. 특히 “언제부턴가 불안해져 가는 신호 널 파괴하고 말 거야 (we want it) Come on! Show me the way to KOSMO Yeah” 파트에서는 고음을 내지르며 파워풀한 보컬을 뽐냈다. Next Level을 통해 유영진 창법과 비슷하다는 평가가 더 많아졌으며, 공공연히 '유영진의 성대로 낳은 딸'이라 불리며 인정받고 있다.</p>
    <p>Savage에서 닝닝과 함께 고음 애드립을 맡았다. 또한 실력도 더욱 성장하면서 가장 많은 파트를 받으며 다시 한번 보컬 멤버로서 두각을 나타냈다.</p>
    <p>카리나와 함께 팀 내 비주얼 에이스로 자주 언급된다. 데뷔 티저 반응도 굉장히 좋았고, 데뷔 전에 MY, KARINA 영상에 잠깐 출연하여 "뭐해?"라며 깜찍하게 미소짓는 장면으로 모해윈터라 불렸으며, 한 장면만으로 입덕한 팬들이 많았다. 팬들이 부르는 별명에서도 알 수 있듯이 무민상 그리고 강아지상이라는 얘기를 가장 많이 듣는다. 주로 말티즈 같이 작고 앙증맞은 하얀 강아지로 많이 비유된다. 윈터 역시 자신의 닮은꼴 동물로 강아지를 골랐다. 닮은 연예인으로는 같은 소속사 선배인 태연이 있으며 배우 소유진과 IZ*ONE 출신의 김채원, 아는 형님에서 민경훈을 닮았다는 의견도 있다. 수박상 계보를 이어가고 있다는 평이 있다.</p>
    <p>TMI 프로필에서 밝힌 취향
      <ul>
        <li>좋아하는 단어: 딸기우유, LOVE</li>
        <li>좋아하는 동물: 사막여우, 북극여우, 강아지, 고양이, 허스키</li>
        <li>좋아하는 색깔: 아이보리,연두색,노란색</li>
        <li>좋아하는 음식: 초콜릿, 과자, 젤리, 타로스무디, 콩국수, 라자냐, 케이크, 빵, 쿠키, 우유, LA갈비</li>
        <li>좋아하는 계절: 가을</li>
        <li>좋아하는 영화: 아메리칸 스나이퍼, 테넷</li>
      </ul>
    </p>
    `,
  },
  {
    leader: true,
    enName: "karina",
    name: "카리나",
    birth: "2000. 04. 11.",
    nation: "한국",
    thubmnail: "karina_thumbnail.png",
    images: ["karina.jpg", "karina_ai.png"],
    content: `
    <p>aespa에서 리더를 맡고 있다. 인터뷰 때마다 멤버들을 살피거나, 뒤에 있는 멤버를 앞으로 나올 수 있게 챙겨주고 부딪히려는 스태프를 챙겨주는 등 리더다운 모습을 자주 보인다.</p>
    <p>데뷔곡 'Black Mamba'에서는 도입부를 맡았다. 알다시피 도입부는 굉장히 중요하다. 곡의 분위기를 설정해주고 듣는 이에게 그룹과 노래에 대한 첫 인상을 남기는 역할이기 때문에 주로 노래를 잘 하는 보컬멤이나 그룹이나 곡에 잘 맞는 이미지를 낼 수 있는 멤버에게 가는 편이다. 그 외에도 특징있는 음색과 쫀득한 톤으로 데뷔곡의 포인트가 되는 파트도 맡았다.</p>
    <p>또 유영진의 발라드 곡인 'Forever (약속)'에서 카리나가 맡은 파트를 듣고 놀란 반응이 많았다. 프리코러스, 코러스, 클라이막스 등 빌드업을 하며 단단하게 부르는 부분들을 맡았는데 멤버들 중 유일하게 중저음 톤이고 목소리가 알토 느낌이 난다는 이유로 '유알토'라는 별명도 생겼다. 이 허스키하면서 낮고 독특한 음색 덕에 소속사 선배인 보아의 목소리가 떠오른다는 평도 꽤 있다.</p>
    <p>안무의 정석 그대로를 잘 살리고 강약 조절도 좋은 편이라 춤을 느낌 있게 춘다. 디테일이 좋고 선이 고우며 빠른 비트에도 버리는 동작 하나 없이 힘이 손 끝까지 전달되기 때문에 유연성, 파워, 리듬감, 표정 연기, 그루브가 좋은 편이다. 상체를 잘 사용하고 동작이 물 흘러가듯 자연스러워 춤선이 중성적이라는 평이 다수. 이를 가장 잘 보여주는 예가 아는 형님에서 춘 댄스 영상. 또한, 주간 아이돌에서 춘 SM 노래 메들리에서도 유연성이 돋보인다. 데뷔 전, 고등학교 시절 댄스 동아리 발표에서 췄던 영상과 비교하면 많은 노력과 연습으로 성장한 것을 알 수 있다.</p>
    <p>무대 위에서 보이는 화려하고 관능적인 이미지로 고양이상, 뱀상, 슬리데린상이란 반응들이 많았다. 그래서 카리나 말로는 어떤 사람들은 자신의 외모가 고양이상이라고 생각할 수 있지만 사실은 눈꼬리가 처졌다고 한다. 메이크업 아티스트의 말에 따르면 카리나는 고양이 같다가도 강아지 같은 느낌이 나는 게 특징이라고 한다. 그래서 생각보다 진하고 센 화장보다는 청순한 메이크업이 더 잘 어울린다는 반응이 많다. 특히 과거 눈썹을 최대한 살려 올려그린 화장법 대신, 눈썹을 짧고 얇게 내려 그린 것이 신의 한수라는 반응도 있었다. 피부는 쿨톤이라고 한다.</p>
    <p>TMI 프로필에서 밝힌 취향
      <ul>
        <li>좋아하는 단어: 귀여워, 뿌엥, 우엥</li>
        <li>좋아하는 동물: 개냥이, 호랑이, 상어, 악어</li>
        <li>좋아하는 색깔: 파란색</li>
        <li>좋아하는 음식: 돈가스, 탄산, 젤리</li>
        <li>좋아하는 계절: 봄</li>
        <li>좋아하는 영화: 겨울왕국, 라푼젤</li>
      </ul>
    </p>
    `,
  },
];
