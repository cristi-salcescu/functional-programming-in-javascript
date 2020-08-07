import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

-- MODEL

type alias Model = { 
    number : Int
  }

initialModel : Model
initialModel = { number = 0 }

-- MESSAGES

type Msg = Increment | Decrement

-- UPDATE

update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment ->
      { model | number = model.number + 1 }

    Decrement ->
      { model | number = model.number - 1 }

-- VIEW

view : Model -> Html Msg
view model =
  div []
    [ 
      div [] [ text (String.fromInt model.number) ]
    , button [ onClick Decrement ] [ text "-" ]
    , button [ onClick Increment ] [ text "+" ]
    ]


main =
  Browser.sandbox { init = initialModel, update = update, view = view }