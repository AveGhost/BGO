import api from "@/app/api/api";


export default async function postNews() {
    try {
        const response = await api.post("/news",{
            "title": "Assassin's Creed Shadow - Nowa Odsłona w Serii",
            "content": [
              {
                "type": "HEADING",
                "content": "Wstęp"
              },
              {
                "type": "PARAGRAPH",
                "content": "Assassin's Creed Shadow przenosi nas do mrocznych, pełnych intryg czasów feudalnej Japonii. Gra, która kontynuuje tradycję serii, oferuje fanom zupełnie nowe doświadczenia, łącząc klasyczną mechanikę z nowoczesnym podejściem do opowieści i grafiki."
              },
              {
                "type": "HEADING",
                "content": "Mechanika gry"
              },
              {
                "type": "PARAGRAPH",
                "content": "Nowa wersja Assassin's Creed Shadow wprowadza do serii szereg innowacji. Po raz pierwszy w historii gry gracze mogą wcielić się w postać ninja, wykonując misje, które wymagają większej precyzji i skradania się, niż kiedykolwiek wcześniej."
              },
              {
                "type": "HEADING",
                "content": "Grafika i atmosfera"
              },
              {
                "type": "PARAGRAPH",
                "content": "Świetnie zaprojektowane lokacje, piękne krajobrazy Japonii oraz dynamiczne zmiany pogody przyczyniają się do wyjątkowej atmosfery, która wciąga na długie godziny. Assassin's Creed Shadow to prawdziwa uczta dla oczu, oferując niespotykaną jakość graficzną w serii."
              },
              {
                "type": "HEADING",
                "content": "Historia i fabuła"
              },
              {
                "type": "PARAGRAPH",
                "content": "Gra wprowadza nas w sam środek konfliktu pomiędzy dwoma potężnymi klanami ninja. Historia pełna jest zwrotów akcji i moralnych dylematów, które zmuszają graczy do podejmowania decyzji mających wpływ na dalszy rozwój wydarzeń."
              },
              {
                "type": "HEADING",
                "content": "Podsumowanie"
              },
              {
                "type": "PARAGRAPH",
                "content": "Assassin's Creed Shadow to gra, która świetnie łączy elementy skradania się, walki i eksploracji, oferując graczom niezapomniane doświadczenia w wirtualnym świecie Japonii."
              }
            ],
            "author_id": 1,
            "publishDate": "2025-04-01T12:00:00Z",
            "score": 9,
            "thumbnail": "https://store-images.s-microsoft.com/image/apps.18685.14601317961808017.7b103743-3dbd-479d-b77a-f82e7f0548c6.117374c6-d4eb-4046-a93b-2e60c73df398?q=90&w=480&h=270",
            "summaryTitle": "Recenzja Assassin's Creed Shadow",
            "summaryContent": "Assassin's Creed Shadow przenosi graczy w mroczne czasy feudalnej Japonii, oferując świetną grafikę, emocjonującą fabułę i innowacyjną mechanikę gry. Wciągająca opowieść, skradanie się i niesamowite widoki sprawiają, że to jeden z najlepszych tytułów w serii.",
            "plusList": [
              "Innowacyjna mechanika skradania się",
              "Piękna grafika i zmieniająca się pogoda",
              "Złożona fabuła z wyborami moralnymi"
            ],
            "minusList": [
              "Niekiedy powtarzalne misje",
              "Wysokie wymagania sprzętowe"
            ],
            "game_id": 1
          });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}