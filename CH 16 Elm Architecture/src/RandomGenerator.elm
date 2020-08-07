import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import Random

-- MODEL

type alias Model = { 
    number : Int
  }


initModel : () -> (Model, Cmd Msg)
initModel _ =
  ( Model 0
  , Cmd.none
  )

-- MESSAGES & COMMANDS

type Msg = GenerateNumber | SetNumber Int

-- UPDATE

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    GenerateNumber ->
      ( model
      , Random.generate SetNumber (Random.int 1 100)
      )

    SetNumber number ->
      ( Model number
      , Cmd.none
      )

-- VIEW

view : Model -> Html Msg
view model =
  div []
    [ 
      div [] [ text (String.fromInt model.number) ]
    , button [ onClick GenerateNumber ] [ text "Generate" ]
    ]


-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none

main =
  Browser.element { init = initModel, update = update, view = view, subscriptions = subscriptions }