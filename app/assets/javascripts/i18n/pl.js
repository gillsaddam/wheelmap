I18n.translations || (I18n.translations = {});
I18n.translations["pl"] = I18n.extend((I18n.translations["pl"] || {}), {
  "actions": {
    "cancel": "Anuluj",
    "next": "Następny",
    "save": "Zapisz",
    "send": "Wyślij"
  },
  "active_admin": {
    "access_denied": {
      "message": "You are not authorized to perform this action."
    },
    "any": "Jakikolwiek",
    "batch_actions": {
      "action_label": "%{title} zaznaczone",
      "button_label": "Akcje na partiach",
      "default_confirmation": "Czy na pewno chcesz to zrobić?",
      "delete_confirmation": "Czy na pewno chcesz usunąć te %{plural_model}?",
      "labels": {
        "destroy": "Usuń"
      },
      "link": "Utwórz jeden",
      "selection_toggle_explanation": "(Przełącz zaznaczenie)",
      "succesfully_destroyed": {
        "few": "Poprawnie usunięto %{count} %{plural_model}",
        "many": "Poprawnie usunięto %{count} %{plural_model}",
        "one": "Poprawnie usunięto 1 %{model}",
        "other": "Poprawnie usunięto %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Nie ma jeszcze zasobu %{resource_name}.",
      "link": "Utwórz go"
    },
    "cancel": "Anuluj",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Dodaj komentarz",
      "author": "Autor",
      "author_missing": "Anonymous",
      "author_type": "Author Type",
      "body": "Treść",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Komentarz nie został zapisany, zawartość była pusta."
      },
      "no_comments_yet": "Nie ma jeszcze komentarzy.",
      "resource": "Zasób",
      "resource_type": "Resource Type",
      "title": "Komentarz",
      "title_content": "Komentarze (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Pulpit",
    "dashboard_welcome": {
      "call_to_action": "Aby dodać sekcje do pulpitu, sprawdź 'app/admin/dashboard.rb'",
      "welcome": "Witaj w Active Adminie. To jest domyślny pulpit."
    },
    "delete": "Usuń",
    "delete_confirmation": "Jesteś pewien, że chcesz to usunąć?",
    "delete_model": "Usuń %{model}",
    "details": "Detale %{model}",
    "devise": {
      "change_password": {
        "submit": "Zmień hasło",
        "title": "Zmień hasło"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Nie pamiętasz hasła?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Zaloguj się",
        "sign_in_with_omniauth_provider": "Zaloguj się z %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Zapamiętaj mnie",
        "submit": "Zaloguj się",
        "title": "Logowanie"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Wyślij ponownie instrukcje aktywacji",
        "title": "Wyślij ponownie instrukcje aktywacji"
      },
      "reset_password": {
        "submit": "Zresetować hasło",
        "title": "Nie pamiętasz hasła?"
      },
      "sign_up": {
        "submit": "Zarejestruj się",
        "title": "Rejestracja"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Resend unlock instructions",
        "title": "Resend unlock instructions"
      },
      "username": {
        "title": "Username"
      }
    },
    "download": "Pobierz:",
    "dropdown_actions": {
      "button_label": "Akcje"
    },
    "edit": "Edytuj",
    "edit_model": "Edytuj %{model}",
    "empty": "Pusty",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Wyczyść Filtry",
        "filter": "Filtruj"
      },
      "predicates": {
        "contains": "Zawiera",
        "ends_with": "Kończy się",
        "equals": "Równe",
        "greater_than": "Większe niż",
        "less_than": "Mniejsze niż",
        "starts_with": "Zaczyna się"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Usuń",
    "has_many_new": "Dodaj nowy %{model}",
    "has_many_remove": "Usuń",
    "index_list": {
      "block": "List",
      "blog": "Blog",
      "grid": "Grid",
      "table": "Table"
    },
    "less_than": "Less Than",
    "logout": "Wyloguj",
    "main_content": "Zaimplementuj %{model}#main_content aby wyświetlić treść.",
    "new_model": "Nowy %{model}",
    "next": "Następna",
    "pagination": {
      "empty": "Nie znaleziono %{model}",
      "entry": {
        "one": "entry",
        "other": "entries"
      },
      "multiple": "Wyświetlanie %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> z <b>%{total}</b>",
      "multiple_without_total": "Wyświetlanie %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Wyświetlanie <b>1</b> %{model}",
      "one_page": "Wyświetlanie <b>wszystkich %{n}</b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Poprzednia",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filtry",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Nie",
      "yes": "Tak"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Podgląd"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Adres",
        "address_city": "Miasto",
        "address_housenumber": "Numer domu",
        "address_postcode": "Kod pocztowy",
        "address_street": "Ulica",
        "name": "Nazwa",
        "note": "Notatka",
        "phone": "Telefon",
        "type": "Typ",
        "website": "Strona www"
      },
      "user": {
        "first_name": "Imię",
        "last_name": "Nazwisko",
        "privacy_policy": "Privacy policy",
        "terms": "Terms"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "musi zostać zaakceptowane",
        "blank": "nie może być pusty",
        "confirmation": "nie zgadza się z potwierdzeniem",
        "empty": "nie może być pusty",
        "equal_to": "musi być równe %{count}",
        "even": "musi być parzyste",
        "exclusion": "jest zarezerwowane",
        "greater_than": "musi być większe od %{count}",
        "greater_than_or_equal_to": "musi być większe lub równe %{count}",
        "inclusion": "nie znajduje się na liście dopuszczalnych wartości",
        "invalid": "jest nieprawidłowe",
        "less_than": "musi być mniejsze od %{count}",
        "less_than_or_equal_to": "musi być mniejsze lub równe %{count}",
        "not_a_number": "nie jest liczbą",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "musi być nieparzyste",
        "record_invalid": "Negatywne sprawdzenie poprawności: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "zostało już zajęte",
        "too_long": "jest za długie (maksymalnie %{count} znaków)",
        "too_short": "jest za krótkie (przynajmniej %{count} znaków)",
        "wrong_length": "ma nieprawidłową długość (powinna wynosić %{count} znaków)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "can't be blank if password is given"
            },
            "privacy_policy": {
              "accepted": "must be accepted"
            },
            "terms": {
              "accepted": "must be accepted"
            }
          }
        },
        "user_session": {
          "email": "Adres e-mail",
          "password": "Hasło",
          "remember_me": "Nie wylogowywuj się"
        }
      },
      "template": {
        "body": "Wystąpiły problemy z następującymi polami:",
        "header": {
          "one": "%{model} nie został zachowany z powodu jednego błędu",
          "other": "%{model} nie został zachowany z powodu %{count} błędów"
        }
      }
    },
    "models": {
      "user": "Użytkownik"
    }
  },
  "apipie": {
    "api_documentation": "Dokumentacja API",
    "comments_powered_by_disqus": "komentarze obsługiwane przez %{disqus}",
    "description": "Opis",
    "enable_javascript_html": "Proszę włączyć obsługę JavaScript w celu zobaczenia %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Błędy",
    "examples": "Przykłady",
    "follow_instructions_href": "dalsze instrukcje",
    "follow_instructions_html": "Przejdź do %{href} aby opisać swoje kontrolery.",
    "goto_homepage_href": "%{app_name} Strona główna dokumentacji API",
    "goto_homepage_html": "Spróbuj przejść do %{href}",
    "header_name": "Nazwa nagłówka",
    "headers": "Nagłówki",
    "metadata": "Metadane",
    "method_not_found_html": "Metoda %{method} dla zasobu %{resource} nie została znaleziona.",
    "nil_allowed": "nil dopuszczalny",
    "no_docs_found": "Nie znalezionio dokumentacji",
    "no_docs_found_descr": "Nie znaleziono dokumentacji dla twojego API.",
    "oops": "Ups!!",
    "optional": "opcjonalny",
    "param_name": "Nazwa parametru",
    "params": "Parametry",
    "required": "wymagany",
    "resource": "Zasób",
    "resource_not_found_html": "Zasób %{resource} nie został znaleziony.",
    "resources": "Zasoby",
    "supported_formats": "Dostępne formaty"
  },
  "application": {
    "require_no_user": {
      "notice": "Jesteś już zalogowany ..."
    },
    "require_user": {
      "notice": " Aby zobaczyć te stronę, musisz być zalogowany."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Dodaj nowe miejsce",
      "edit": "Edytuj miejsce"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "zamknij",
    "skip": "pomiń"
  },
  "community_support_form": {
    "new": {
      "form": {
        "describe": "Proszę pisz do nas w języku angielskim lub niemieckim.",
        "flash_after_submit": "Dziękujemy za skontaktowanie się z nami. Nasz zespół pomocy technicznej skontaktuję się z Tobą tak szybko jak to możliwe.",
        "header_text_html": "Proszę sprawdź <a href=\"https://news.wheelmap.org/en/faq/\">często zadawane pytania</a> w celu uzyskania pierwszej pomocy. Jeśli nie ma tam rozwiązania problemu, odpowiedź na następujące pytania, żebyśmy mogli go rozwiązać.",
        "note": "Zauważ, że Wheelmap jest projektem open-source, prowadzonym przez organizację non-profit, przez co mamy ograniczone środki na rozwój aplikacji.",
        "questions": {
          "a": "Co zrobiłeś?",
          "b": "Jaki był spodziewany efekt?",
          "c": "Co się wydarzyło w zamian?"
        },
        "submit_button": "Zatwierdź",
        "title": "Zgłoś problem"
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "nie",
      "pon",
      "wto",
      "śro",
      "czw",
      "pia",
      "sob"
    ],
    "abbr_month_names": [
      "",
      "sty",
      "lut",
      "mar",
      "kwi",
      "maj",
      "cze",
      "lip",
      "sie",
      "wrz",
      "paź",
      "lis",
      "gru"
    ],
    "day_names": [
      "niedziela",
      "poniedziałek",
      "wtorek",
      "środa",
      "czwartek",
      "piątek",
      "sobota"
    ],
    "formats": {
      "default": "%d-%m-%Y",
      "long": "%B %d, %Y",
      "short": "%d %b"
    },
    "month_names": [
      "",
      "styczeń",
      "luty",
      "marzec",
      "kwiecień",
      "maj",
      "czerwiec",
      "lipiec",
      "sierpień",
      "wrzesień",
      "październik",
      "listopad",
      "grudzień"
    ],
    "order": [
      "!ruby/symbol day",
      "!ruby/symbol month",
      "!ruby/symbol year"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "około godziny",
        "other": "około %{count} godzin"
      },
      "about_x_months": {
        "one": "około miesiąca",
        "other": "około %{count} miesięcy"
      },
      "about_x_years": {
        "one": "około rok",
        "other": "około %{count} lat"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "pół minuty",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "ponad rok",
        "other": "ponad %{count} lat"
      },
      "x_days": {
        "one": "1 dzień",
        "other": "%{count} dni"
      },
      "x_minutes": {
        "one": "1 minuta",
        "other": "%{count} minut"
      },
      "x_months": {
        "one": "1 miesiąc",
        "other": "%{count} miesięcy"
      },
      "x_seconds": {
        "one": "1 sekunda",
        "other": "%{count} sekund"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Seconds",
      "year": "Year"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Twój adres email został potwierdzony.",
      "link": "Nie otrzymałeś instrukcji odblokowania?",
      "send_instructions": "Za chwilę otrzymasz wiadomość z linkiem do potwierdzenia Twojego adresu email.",
      "send_paranoid_instructions": "Jeśli twoje konto istnieje, za kilka minut otrzymasz email z instrukcją, jak je potwierdzić."
    },
    "destroy": {
      "confirm": "Jesteś pewien?",
      "headline": "Usuń konto",
      "link": "Skasuj teraz"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Aktualne hasło <i>(potrzebujemy go, aby potwierdzić Twoje zmiany)</i>",
          "email": "E-mail",
          "password": "Hasło <i>(zostaw to pole puste, jeśli nie chcesz go zmieniać)</i>",
          "password_confirmation": "Powtórz hasło"
        },
        "submit": "Zapisz zmiany"
      },
      "headline": "Edytuj konto"
    },
    "failure": {
      "already_authenticated": "Jesteś już zalogowany.",
      "inactive": "Twoje konto nie zostało jeszcze aktywowane.",
      "invalid": "Niepoprawny adres email lub hasło.",
      "invalid_token": "Niepoprawny token.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Twoje konto jest zablokowane.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Sesja wygasła, aby kontynuować zaloguj się ponownie.",
      "unauthenticated": "Aby kontynuować, zaloguj lub zarejestruj się.",
      "unconfirmed": "Aby kontynuować, potwierdź konto."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Proszę kliknąć w link przesłany właśnie na Twój adres email. Jeśli email nie dotarł, proszę sprawdzić folder ze spamem. Jeśli email rzeczywiście nie dotarł, proszę wrócić do strony rejestracji i spróbować ponownie.",
        "subject": "Jeszcze tylko jeden krok do aktywacji twojego konta"
      },
      "reset_password_instructions": {
        "subject": "Instrukcja ustawienia nowego hasła"
      },
      "unlock_instructions": {
        "subject": "Intrukcje odblokowywania"
      }
    },
    "mandatory": "* Wymagane",
    "omniauth_callbacks": {
      "failure": "Autoryzacja przy pomocy %{kind} nie powiodła się. Błąd: \"%{reason}\".",
      "permission_missing": "Nie masz odpowiednich uprawnień.",
      "success": "Poprawnie zalogowany z %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-mail"
        },
        "submit": "Ustaw nowe hasło"
      },
      "headline": "Zapomniałeś hasła?"
    },
    "password_reset": {
      "email": {
        "comment": "Jeżeli nie próbowałeś zmienić hasła, zignoruj ten e-mail.<br/>Twoje hasło nie zostanie zmienione, dopóki nie klikniesz w link powyżej i nie ustawisz nowego hasła.",
        "headline": "Witaj %{email}",
        "link": "Zmień moje hasło",
        "text": "Otrzymaliśmy żądanie zmiany hasła. Jeśli to Ty, kliknij w poniższy link. W innym wypadku - zignoruj tę wiadomość."
      },
      "form": {
        "labels": {
          "password": "Nowe hasło",
          "password_confirmation": "Powtórz hasło"
        },
        "submit": "Ustaw nowe hasło"
      },
      "headline": "Ustaw nowe hasło"
    },
    "passwords": {
      "link": "Zapomniałeś hasła?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "Wkrótce otrzymasz email z instrukcją, jak zresetować hasło.",
      "send_paranoid_instructions": "Jeśli twoje konto istnieje, za kilka minut otrzymasz email z instrukcją, jak zresetować hasło.",
      "updated": "Hasło zostało pomyślnie zmienione, jesteś teraz zalogowany.",
      "updated_not_active": "Twoje hasło zostało zmienione"
    },
    "registrations": {
      "destroyed": "Konto zostało usunięte. Mamy nadzieję że wkrótce powrócisz.",
      "inactive_signed_up": "Rejestracja zakończyła się pomyślnie. Nie zostałeś jednak zalogowany z powodu %{reason}.",
      "link": "Zarejestruj się",
      "reasons": {
        "inactive": "nieaktywne",
        "locked": "zablokowane",
        "unconfirmed": "niepotwierdzone"
      },
      "signed_up": "Rejestracja zakończyła się pomyślnie. Wysłaliśmy Ci email z potwierdzeniem.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Konto zostało pomyślnie zaktualizowane."
    },
    "sessions": {
      "inactive": "Twoje konto nie zostało jeszcze aktywowane.",
      "invalid": "Niepoprawny adres e-mail lub hasło",
      "invalid_token": "Nieprawidłowy token autoryzacji",
      "link": "Zaloguj się",
      "locked": "Twoje konto jest zablokowane",
      "new": {
        "no_osm_account": "Nie masz konta w OpenStreetMap?",
        "osm_promo_text": "Wheelmap bazuje na danych przestrzennych OpenStreetMap (OSM). OpenStreetMap jest bezpłatną mapą świata, tworzoną przez ludzi takich jak Ty. Jest jak Wikipedia dla map. Aby móc zmieniać lub tworzyć miejsca, musisz posiadać konto na OpenStreetMap i być na nim zalogowany.",
        "promo_text_thank_you": "Dziękujemy z Twoje wsparcie!",
        "sign_in_with": "Zaloguj się za pomocą %{kind}",
        "sign_up_with_osm": "Zarejestruj się.",
        "wheelmap_promo_text": "Z Twoimi informacjami o dostępie do miejsc dla osób na wózkach, pomagasz ludziom z ograniczeniam fizycznymi w planowaniu ich codziennych aktywnosci. Co więcej, to również pomoże utrzymać  OpenStreetMap bardziej szczegółowym."
      },
      "signed_in": "Zalogowano pomyślnie.",
      "signed_out": "Wylogowano pomyślnie.",
      "timeout": "Sesja wygasła, aby kontynuować zaloguj się ponownie.",
      "unauthenticated": "Aby kontynuować, zaloguj lub zarejestruj się.",
      "unconfirmed": "Aby kontynuować, potwierdź konto."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Hasło",
          "remember_me": "Zapamiętaj mnie"
        },
        "submit": "Zaloguj się"
      },
      "headline": "Zaloguj się"
    },
    "sign_out": {
      "headline": "Wyloguj się"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Potwierdź moje konto",
        "please_confirm": "Kliknij w poniższy link aby potwierdzić Twoje konto:",
        "welcome": "Witaj %{email}"
      },
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Hasło",
          "password_confirmation": "Powtórz hasło",
          "wants_newsletter": "Tak, chcę otrzymywać bieżące informacje o Wheelmap - ale proszę, nie więcej niż raz w miesiącu."
        },
        "submit": "Zarejestruj się"
      },
      "headline": "Zarejestruj się"
    },
    "unlocks": {
      "link": "Nie otrzymałeś instrukcji odblokowania?",
      "send_instructions": "Za kilka minut otrzymasz email z instrukcją, jak odblokować swoje konto.",
      "send_paranoid_instructions": "Jeśli twoje konto istnieje, za kilka minut otrzymasz email z instrukcją, jak je odblokować.",
      "unlocked": "Twoje konto zostało odblokowane. Jesteś teraz zalogowany."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "musi być zaakceptowane",
      "already_confirmed": "zostało już potwierdzone",
      "blank": "musi być wypełnione",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "nie można potwierdzić",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "musi być wypełnione",
      "equal_to": "musi wynosić dokładnie %{count}",
      "even": "musi być liczbą parzystą",
      "exclusion": "jest zarezerwowany",
      "expired": "utrata ważności, poproś o nowy",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "musi być większe niż %{count}",
      "greater_than_or_equal_to": "musi być równe lub większe niż %{count}",
      "inclusion": "wartość nieważna ",
      "invalid": "nieważny",
      "less_than": "musi wynosić mniej niż %{count}",
      "less_than_or_equal_to": "musi być równe lub mniejsze niż %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "nie jest liczbą",
      "not_an_integer": "musi być liczbą całkowitą",
      "not_found": "nie został odnaleziony",
      "not_locked": "nie został zablokowany",
      "not_saved": {
        "few": "%{count} błędy nie pozwoliły zapisać %{resource}:",
        "many": "%{count} błędów nie pozwoliło zapisać %{resource}:",
        "one": "błąd nie pozwolił zapisać %{resource}: ",
        "other": "%{count} błędów nie pozwoliło zapisać %{resource}:"
      },
      "odd": "musi być liczbą nieparzystą",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "jest już zajęte",
      "too_long": "jest za długie (nie więcej niż %{count} znaków)",
      "too_short": "jest za krótkie (nie mniej niż %{count} znaków)",
      "wrong_length": "niewłaściwa długość (powinno być %{count} znaków)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Adres strony www jest niepoprawny."
        }
      }
    },
    "template": {
      "body": "Nastąpiły problemy z następującymi polami:",
      "header": {
        "few": "Obiekt %{model} nie został zapisany, wystąpiły %{count} błędy",
        "many": "Obiekt %{model} nie został zapisany, wystąpiły %{count} błędy",
        "one": "Obiekt %{model} nie został zapisany, wystąpił błąd ",
        "other": "Obiekt %{model} nie został zapisany, wystąpiły %{count} błędy"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Możesz zawsze zmienić zaznaczenie twoich miejsc. Wybierz tylko prawy przycisk, \n\"zapisz\" i gotowe!",
      "1": "Jako zalogowany użytkownik możesz dodawać / poprawiać informacje o miejscu.\nKliknij \"Zmień\" i dodaj albo popraw.",
      "2": "Możesz dodać dodatkowe informacje (np. \"To miejsce posiada mobilną rampę\") w komentarzach sekcji. Naciśnij \"Edytuj\" i \"dodaj komentarz\""
    },
    "headline": "Czy można napotkać jakieś trudności w tym miejscu?",
    "questions": {
      "0": "To zaznaczenie jest niepoprawne.",
      "1": "Szczegóły miejsca są niepoprawne lub ich brak.",
      "2": "Posiadam więcej informacji o tym miejscu."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} został utworzony"
      },
      "destroy": {
        "alert": "%{resource_name} nie mógł zostać usunięty",
        "notice": "%{resource_name} został usunięty"
      },
      "update": {
        "notice": "%{resource_name} został pomyślnie uaktualniony"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Obraz został usunięty"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "dostępne dla osób na wózkach",
    "show_limited_accessible_places": "Ograniczony dostęp dla wózków",
    "show_places_without_status": "Nieznany status",
    "show_unaccessible_places": "Niedostępne dla osób na wózkach"
  },
  "formtastic": {
    "create": "Utwórz %{model}",
    "hints": {
      "email": "Traktujemy Twój adres poufnie. Obiecujemy nie wysłać spamu!",
      "lat": "Przesuń znacznik na mapie w poprawne miejsce",
      "osm_username": "Nie jesteś jeszcze członkiem? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Utwórz konto w serwisie Openstreetmap teraz</a>",
      "password": "(zostaw to pole puste, jeśli nie chcesz go zmieniać)",
      "phone": "Na przykład: +49 30 12345678",
      "website": "Na przykład: http://www.example.com"
    },
    "labels": {
      "category": "Kategoria:",
      "centralkey": "Klucz uniwersalny:",
      "city": "Miasto:",
      "create": "Stwórz miejsce",
      "email": "Email",
      "finish": "Koniec",
      "housenumber": "Nr:",
      "lat": "Szerokość geograficzna",
      "lon": "Długość geograficzna",
      "name": "Nazwisko:",
      "osm_password": "Hasło OpenStreetMap",
      "osm_username": "Nazwa konta OpenStreetMap",
      "password": "Hasło",
      "password_confirmation": "Powtórz hasło",
      "phone": "Telefon:",
      "postcode": "Kod pocztowy:",
      "privacy_policy": "Akceptuję paragraf 1 i 2 Polityki Ochrony Prywatności",
      "reset": "Resetuj",
      "save": "Zachowaj",
      "street": "Ulica:",
      "terms": "Akceptuję Politykę",
      "type": "Typ:",
      "website": "Strona www:",
      "wheelchair": "Dostępność dla osób na wózkach?",
      "wheelchair_description": "Komentarz dostępności:",
      "wheelchair_toilet": "Toalety dostosowane dla niepełnosprawnych na wózku inwalidzkim:"
    },
    "titles": {
      "basic": "Podstawowe dane",
      "optional": "Więcej informacji <span class=\"addition\">(wszystkie pola są nieobowiązkowe)</span>"
    },
    "update": "Aktualizuj %{model}"
  },
  "global": {
    "form_validation_error": "Zobacz listę błędów poniżej."
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org jest mapą online, na której możesz wyszukiwać i oznaczać miejsca dostępne dla osób na wózkach inwalidzkich. Zaangażuj się i dodawaj miejsca publiczne takie jak bary, restauracje, kina, supermarkety i inne!",
      "homepage": "Strona startowa",
      "keywords": "znajdź szukaj zaznacz miejsca dostępne dla osób na wózkach",
      "search": "Szukaj",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "blog": "Blog",
      "choose_language": "Wybierz język",
      "contact": "Kontakt",
      "faq": "FAQ",
      "feedback": "Feedback",
      "home": "Start",
      "how_to_add_a_place": "Jak dodać nowe miejsce?",
      "imprint": "Stopka redakcyjna",
      "logged_in_as": "Zalogowany jako:",
      "login": "Zaloguj się",
      "logout": "Wyloguj się",
      "map": "Mapa",
      "newsletter": "Newsletter",
      "press": "Dla mediów",
      "profile": "Profil",
      "projects": "Zaangażuj się",
      "report_problem": "Zgłoś problem",
      "suggestions": "Sugestie",
      "travelguide": "Przewodnik turystyczny",
      "what_is_barrier_free": "Co to znaczy \"dostępne dla osób na wózkach\"?",
      "what_is_wheelmap": "Co to jest Wheelmap?"
    },
    "searchbar": {
      "add_place": "Dodaj kolejne miejsce",
      "find": "znajdź",
      "placeholder": "np. Sunset Boulevard L.A. lub Brandenburg Gate Berlin",
      "title_add_place": "Dodaj nowe miejsce dla tej pozycji!"
    },
    "tagline": "Logo wheelmap",
    "title": "Znajdź miejsca przystosowane dla wózków inwalidzkich.",
    "toolbar": {
      "categories": "Kategoria"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Wyświetla %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> z <b>%{total}</b> łącznie"
      },
      "one_page": {
        "display_entries": {
          "few": "Wyświetla <b>wszystkie %{count}</b> %{entry_name}",
          "one": "Wyświetla <b>%{count}</b> %{entry_name}",
          "other": "Wyświetla <b>wszystkie %{count}</b> %{entry_name}",
          "zero": "Nie znaleziono %{entry_name}"
        }
      }
    },
    "select": {
      "prompt": "Wybierz"
    },
    "submit": {
      "create": "stwórz %{model}",
      "submit": "zachowaj %{model}",
      "update": "uaktualnij %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Pokaż na Wheelmap.org",
      "filter": {
        "category": "Wybierz kategorię",
        "deselect_all": "Odznacz wszystko",
        "select_all": "Zaznacz wszystko",
        "wheelchair": "Dostępne dla osób na wózkach?"
      },
      "ie": {
        "action": {
          "ignore": "Ignoruj",
          "upgrade": "Zaktualizuj przegladarkę"
        },
        "warning": {
          "headline": "Przepraszamy!",
          "message": "Wygląda na to, że używasz Internet Explorer. Wheelmap wymaga przeglądarki zgodnej ze standardami. Prosimy, rozważ użycie Firefox, Chrome, Safari lub Opery."
        }
      },
      "link": {
        "node": {
          "create": "Dodaj nowe miejsce"
        }
      },
      "overlay": {
        "button": "Zaczynamy!",
        "categories": "Filtruj miejsca poprzez kategorie",
        "filter": "Filtruj miejsca poprzez dostępność dla poruszających się na wózku inwalidzkim",
        "headline": "Zaznacz i wyszukaj na mapie Wheelmap.org  miejsca przystosowane dla poruszających się na wózku inwalidzkim. To proste:",
        "lookup": "wyszukiwanie poprzez miejsce szczególne",
        "secondary_headline": "Nasz system kolorów opisuje przystosowanie dla poruszających się na wózku inwalidzkim:"
      },
      "popup": {
        "form": {
          "limited": "Ograniczony dostęp dla wózków",
          "no": "Niedostępne dla osób na wózkach",
          "save": "Aktualizuj",
          "unknown": "Nieznany status",
          "yes": "Dostępne"
        },
        "help": "Dostępne dla osób na wózkach? (Pomoc)",
        "more": "więcej ..."
      },
      "zoom_alert": "Powiększ, aby zobaczyć więcej miejsc."
    }
  },
  "how?": "Jak?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "Częściowo przystosowane dla osób na wózkach inwalidzkich %{type} in %{city} (%{count})"
        },
        "no": {
          "headline": "Nieprzystosowane dla osób na wózkach inwalidzkich %{type} in %{city} (%{count})"
        },
        "unknown": {
          "headline": "Wszystkie %{type} w %{city} z nieznanym statusem dostępności dla osób na wózkach (%{count})"
        },
        "yes": {
          "headline": "Wszystkie dostępne dla osób na wózkach %{type} w %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Projekt organizacji Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Wybierz kategorię"
    },
    "node": {
      "info_edit_position": "Miejsce pojawi się na Wheelmap tak jak powyżej. Jeśli znacznik nie jest umieszczony w poprawnym miejscu, możesz <a href=\"%{url}\">zmienić jego pozycję na OpenStreetMap.</a>",
      "mail": {
        "body": "(Proszę użyj jedynie języka angielskiego lub niemieckiego)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problem z %{headline}"
      }
    },
    "node_type": {
      "prompt": "Wybierz typ"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Telefon:",
      "website": "Strona internetowa:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Ups, Twój wpis był niepoprawny lub niekompletny.",
        "successfull": "Dziękujemy, wpis został poprawnie dodany i wkrótce pojawi się na stronie"
      }
    },
    "edit": {
      "header": {
        "title": "Edytuj miejsce: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Anuluj"
      }
    },
    "errors": {
      "default": "Ups, coś poszło nie tak. Zostaliśmy poinformowani o tym problemie",
      "not_authorized": "Przepraszamy, autoryzacja nie powiodła się",
      "not_available": "Przepraszamy, strona jest chwilowo niedostępna",
      "not_existent": "Przepraszamy, to miejsce nie jest już dostępne.",
      "not_found": "Przepraszamy, strona nie została znaleziona",
      "param_missing": "Proszę wpisać szukane słowo."
    },
    "flash": {
      "authorize_wheelmap": "Aby edytować dane, potrzebujesz konta w serwisie OpenStreetMap"
    },
    "new": {
      "form": {
        "legend": "lokalizacja miejsca",
        "location": "Klinij na mapie w punkt, gdzie znajduje się miejsce.",
        "section": {
          "accessibility": {
            "name": "Dostępność dla osób na wózkach",
            "title": "Informacje na temat dostępności dla wózków inwalidzkich"
          },
          "address": {
            "help": "Możesz przesunąć znacznik do prawidłowej lokalizacji miesjca na mapie.",
            "name": "Adres",
            "title": "Gdzie jest to miejsce?"
          },
          "contact": {
            "name": "Kontakt",
            "title": "Inne dane kontaktowe"
          },
          "name_category": {
            "name": "Nazwa i rodzaj miejsca",
            "title": "Podaj wstępne informacje o miejsu:"
          },
          "overview": {
            "title": "Czy wszystkie dane są prawidłowe?"
          },
          "similar_nodes": {
            "empty": "Nie znaleziono podobnych miejsc",
            "go_edit": "Kontynuuj z tym miejscem",
            "go_new": "Jeśli to żadne z powyższych miejsc...",
            "name": "Podobne miejsca",
            "title": "Znaleźliśmy podobne miejsca niedaleko. Czy to któreś z nich?"
          }
        },
        "title": "Dodaj miejsce"
      },
      "header": {
        "title": "Nowe miejsce | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Anuluj"
      }
    },
    "node": {
      "link": {
        "claim": "Pracujesz tutaj?",
        "edit_node": "Edytuj miejsce",
        "report_bug": "Zgłoś problem"
      }
    },
    "node_data": {
      "address": "Adres:",
      "contact_details": "Dane kontaktowe:"
    },
    "node_edit": {
      "details": "Szczegóły",
      "edit": "Zmień"
    },
    "node_map": {
      "map": "Mapa:"
    },
    "node_note": {
      "comment": "Komentarze:"
    },
    "node_photos": {
      "add": "Dodaj",
      "alert": "Uwaga: Wejście powinno być wyraźnie widoczne na zdjęciu w celu wykazania, co następuje: Czy są jakieś stopnie przy wejściu? Mniej więcej jak wysoki jest stopień? Jak szerokie są drzwi? Zdjęcie musi być w formacie JPG lub PNG. Nie powinno być większe niż 10 MB.",
      "photos_of_this_place": "Obrazy dla tego miejsca",
      "upload": "Załaduj"
    },
    "node_similar": {
      "similar": "podobne miejsca: %{name}"
    },
    "node_status": {
      "accessible_toilet": "toalety dostosowane dla niepełnosprawnych na wózku inwalidzkim:",
      "premium": "%{name} mówi: to miejsce jest",
      "wheelchair_accessibility": "dostępność dla poruszających się na wózku inwalidzkim:"
    },
    "node_streetview": {
      "streetview": "Widok ulicy:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Sprawdź na mapie Wheelmap.org czy to miejsce jest przystosowane dla poruszających się na wózku inwalidzkim albo dodaj inne informacje lub obrazy.",
          "title": "To miejsce znajduje się na mapie Wheelmap.org: %{name}"
        },
        "title": "Miejsce: %{node} | wheelmap.org"
      },
      "link": {
        "back": "wróć",
        "large_map": "Powiększ",
        "listing": "Wszystkie miejsca typu '%{type}' w %{city}",
        "upload": "Dodaj obraz"
      },
      "more_data_from": "Istnieje więcej informacji o tym miejscu, zatwierdzonych przez:",
      "share": {
        "email": "Email",
        "facebook": "Facebook",
        "text": "Znalazłem to miejsce Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Ups, Twój wpis był niepoprawny lub niekompletny.",
        "successfull": "Dziękujemy, wpis został poprawnie dodany i wkrótce pojawi się na stronie"
      }
    },
    "update_wheelchair": {
      "successfull": "Status dla miejsca \"%{name}\" zmienił się na \"%{status} dostępny dla osób na wózkach\" i wkrótce będzie widoczny."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": " ,",
        "format": "%u %n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "PLN"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Miliard",
          "million": "Milion",
          "quadrillion": "Kwadrylion",
          "thousand": "Tysiąc",
          "trillion": "Trylion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "few": "bajtów",
            "many": "bajtów",
            "one": "bajt",
            "other": "bajtów"
          },
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "tb": "TB"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "oauth": {
    "application": {
      "connect": {
        "headline": "Aby tworzyć lub modyfikować miejsca na Wheelmap.org, musisz połączyć swoje konto z kontem OpenStreetMap."
      }
    },
    "callback": {
      "notice": "Twoje konto Wheelmap jest teraz połączone z kontem OpenStreetMap %{user}."
    }
  },
  "or": "lub",
  "place": {
    "few": "%{count} miejsc",
    "many": "%{count} miejsc",
    "one": "%{count} miejsce",
    "other": "%{count} miejsc"
  },
  "poi": {
    "category": {
      "accommodation": "Zakwaterowanie",
      "education": "Edukacja",
      "food": "Jedzenie",
      "government": "Urzędy",
      "health": "Szpital lub przychodnia",
      "leisure": "Czas wolny",
      "misc": "Różne",
      "money_post": "Bank / poczta",
      "public_transfer": "Transport publiczny",
      "shopping": "Zakupy",
      "sport": "Sport",
      "tourism": "Turystyka",
      "unknown": "Nieznany"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Hotel na plaży",
        "bed_and_breakfast": "Bed and breakfast",
        "camp_site": "Pole kempingowe",
        "caravan_site": "Kemping",
        "chalet": "Domek wypoczynkowy",
        "dormitory": "Akademik",
        "guest_house": "Pensjonat",
        "hostel": "Hostel",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Szkoła wyższa",
        "driving_school": "Szkoła Nauki Jazdy",
        "kindergarten": "Przedszkole",
        "library": "Biblioteka",
        "museum": "Muzeum",
        "school": "Szkoła",
        "university": "Uniwersytet"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Ogródek piwny",
        "cafe": "Kawiarnia",
        "drinking_water": "Ujęcie wody pitnej",
        "fast_food": "Fast food",
        "ice_cream": "Lodziarnia",
        "pub": "Pub",
        "restaurant": "Restauracja"
      },
      "government": {
        "courthouse": "Sąd",
        "embassy": "Ambasada",
        "employment_agency": "Agencja zatrudniania",
        "government": "Agencja rządowa",
        "police": "Policja",
        "public_building": "Budynek użyteczności publicznej",
        "townhall": "Ratusz miejski"
      },
      "health": {
        "alternative": "Specjalista medycyny alternatywnej",
        "dentist": "Stomatolog",
        "doctors": "Lekarz",
        "hearing_aids": "Sklep z aparatami słuchowymi",
        "hospital": "Szpital",
        "medical_supply": "Zaopatrzenie medyczne",
        "occupational_therapist": "Terapeuta zajęciowy",
        "pharmacy": "Apteka",
        "physiotherapist": "Fizjoterapeuta",
        "psychotherapist": "Psychoterapeuta",
        "social_facility": "Infrastruktura społeczna",
        "speech_therapist": "Logopeda",
        "veterinary": "Weterynarz"
      },
      "leisure": {
        "arena": "Hala sportowa",
        "brothel": "Agencja towarzyska",
        "casino": "Kasyno",
        "cinema": "Kino",
        "community_centre": "Dom kultury",
        "gallery": "Galeria",
        "massage": "Salon masażu",
        "nightclub": "Klub nocny",
        "playground": "Plac zabaw",
        "sauna": "Sauna",
        "stripclub": "Klub nocny ze striptizem",
        "tattoo": "Salon tatuażu",
        "theatre": "Teatr",
        "zoo": "Zoo"
      },
      "misc": {
        "association": "Stowarzyszenie",
        "company": "Firma (Biuro)",
        "estate_agent": "Biuro Nieruchomości",
        "insurance": "Agencja ubezpieczeniowa",
        "lawyer": "Kancelaria prawna",
        "ngo": "Organizacja pozarządowa",
        "place_of_worship": "Miejsce kultu",
        "political_party": "Biuro partii politycznej",
        "toilets": "Toaleta"
      },
      "money_post": {
        "atm": "Bankomat",
        "bank": "Bank",
        "bureau_de_change": "Kantor wymiany walut",
        "post_box": "Skrzynka pocztowa",
        "post_office": "Poczta"
      },
      "public_transfer": {
        "aerodrome": "Lotnisko",
        "bicycle_parking": "Parking dla rowerów",
        "bicycle_rental": "Wypożyczalnia rowerów",
        "boatyard": "Stocznia jachtowa",
        "bus_station": "Dworzec autobusowy",
        "bus_stop": "Przystanek autobusowy",
        "cable_car": "Kolejka linowa",
        "car_rental": "Wypożyczalnia samochodów",
        "car_sharing": "Car sharing",
        "chair_lift": "Wyciąg krzesełkowy",
        "ferry": "Prom",
        "ferry_terminal": "Terminal promowy",
        "fuel": "Stacja paliw",
        "halt": "Przystanek",
        "light_rail": "Pociąg podmiejski",
        "parking": "Parking",
        "parking_aisle": "Przejście na parkingu",
        "platform": "Peron",
        "station": "Metro",
        "subway_entrance": "Wejście do metra",
        "terminal": "Terminal lotniska",
        "tram_stop": "Przystanek tramwajowy"
      },
      "shopping": {
        "alcohol": "Sklep monopolowy",
        "antiques": "Antyki",
        "art": "Sklep ze sztuką",
        "bakery": "Piekarnia",
        "beauty": "Kosmetyczka",
        "beverages": "Sklep z napojami",
        "bicycle": "Sklep rowerowy",
        "books": "Księgarnia",
        "butcher": "Rzeźnik",
        "car_repair": "Warsztat samochodowy",
        "car_shop": "Salon samochodowy",
        "chemist": "Apteka",
        "clothes": "Sklep z ubraniami",
        "computer": "Komputer",
        "confectionery": "Cukiernia",
        "convenience": "Sklep",
        "copyshop": "Ksero",
        "deli": "Delikatesy",
        "department_store": "Dom towarowy",
        "doityourself": "Zrób to sam",
        "dry_cleaning": "Pralnia chemiczna",
        "electronics": "Sklep ze sprzętem RTV",
        "erotic": "Sex shop",
        "fabric": "Sklep z tkaninami",
        "farm_shop": "Żywność ekologiczna",
        "florist": "Kwiaciarnia",
        "funeral_directors": "Zakład pogrzebowy",
        "furniture": "Sklep z meblami",
        "garden_centre": "Sklep ogrodniczy",
        "gift": "Sklep z prezentami",
        "greengrocer": "Sklep warzywny",
        "hairdresser": "Fryzjer",
        "hardware": "Hardware",
        "interior_decoration": "Sklep meblowy",
        "jewelry": "Jubiler",
        "kiosk": "Kiosk",
        "laundry": "Pralnia",
        "mall": "Centrum handlowe",
        "mobile_phone": "Sklep z telefonami",
        "music": "Sklep z płytami",
        "musical_instrument": "Sklep muzyczny",
        "newsagent": "Kiosk",
        "optician": "Optyk",
        "organic": "Sklep z artykułami organicznymi",
        "outdoor": "Sklep z odzieżą sportową ",
        "pet": "Sklep zoologiczny",
        "photo": "Zdjęcie",
        "second_hand": "Sklep z używaną odzieżą",
        "shoes": "Sklep z obuwiem",
        "sports": "Sport",
        "stationery": "Sklep z artykułami biurowymi",
        "supermarket": "Supermarket",
        "tailor": "Krawiec",
        "tea": "Herbaciarnia",
        "tobacco": "Sklep tytoniowy",
        "toys": "Zabawki",
        "travel_agency": "Biuro podróży",
        "variety_store": "Dyskont",
        "video": "Wypożyczalnia video / płyt DVD"
      },
      "sport": {
        "pitch": "boisko sportowe",
        "sports_centre": "Ośrodek sportowy",
        "stadium": "Stadion",
        "swimming": "Kąpielisko",
        "swimming_pool": "Basen"
      },
      "tourism": {
        "archaeological_site": "Stanowisko archeologiczne",
        "arts_centre": "Centrum kultury",
        "artwork": "Dzieło sztuki",
        "attraction": "Atrakcja",
        "battlefield": "Pole bitwy",
        "beach": "Plaża",
        "beacon": "Latarnia morska",
        "castle": "Zamek",
        "cave_entrance": "Wejście do jaskini",
        "information": "Informacja turystyczna",
        "memorial": "Pomnik",
        "theme_park": "Park rozrywki",
        "tower": "Wieża",
        "viewpoint": "Punkt widokowy"
      },
      "unknown": {
        "unknown": "Nieznany"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Stan: połączony",
          "grant": "Połącz się",
          "not_connected": "Status: nie połączony",
          "revoke": "Rozłącz"
        }
      },
      "headline": "Edytuj profil"
    }
  },
  "ransack": {
    "all": "all",
    "and": "and",
    "any": "any",
    "asc": "ascending",
    "attribute": "attribute",
    "combinator": "combinator",
    "condition": "condition",
    "desc": "descending",
    "or": "or",
    "predicate": "predicate",
    "predicates": {
      "blank": "is blank",
      "cont": "contains",
      "cont_all": "contains all",
      "cont_any": "contains any",
      "does_not_match": "doesn't match",
      "does_not_match_all": "doesn't match all",
      "does_not_match_any": "doesn't match any",
      "end": "ends with",
      "end_all": "ends with all",
      "end_any": "ends with any",
      "eq": "equals",
      "eq_all": "equals all",
      "eq_any": "equals any",
      "false": "is false",
      "gt": "greater than",
      "gt_all": "greater than all",
      "gt_any": "greater than any",
      "gteq": "greater than or equal to",
      "gteq_all": "greater than or equal to all",
      "gteq_any": "greater than or equal to any",
      "in": "in",
      "in_all": "in all",
      "in_any": "in any",
      "lt": "less than",
      "lt_all": "less than all",
      "lt_any": "less than any",
      "lteq": "less than or equal to",
      "lteq_all": "less than or equal to all",
      "lteq_any": "less than or equal to any",
      "matches": "matches",
      "matches_all": "matches all",
      "matches_any": "matches any",
      "not_cont": "doesn't contain",
      "not_cont_all": "doesn't contain all",
      "not_cont_any": "doesn't contain any",
      "not_end": "doesn't end with",
      "not_end_all": "doesn't end with all",
      "not_end_any": "doesn't end with any",
      "not_eq": "not equal to",
      "not_eq_all": "not equal to all",
      "not_eq_any": "not equal to any",
      "not_in": "not in",
      "not_in_all": "not in all",
      "not_in_any": "not in any",
      "not_null": "is not null",
      "not_start": "doesn't start with",
      "not_start_all": "doesn't start with all",
      "not_start_any": "doesn't start with any",
      "null": "is null",
      "present": "is present",
      "start": "starts with",
      "start_all": "starts with all",
      "start_any": "starts with any",
      "true": "is true"
    },
    "search": "search",
    "sort": "sort",
    "value": "value"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Przykro nam, nie mogliśmy znaleźć \"%{query}\".",
        "hint": {
          "example": "<strong>przykład:</strong> London, United Kingdom",
          "info": "Nasza wyszukiwarka wyszukuje miejsca poprzez nazwę lub dane adresowe. \nWpisz proszę nazwę wyszukiwanego miejsca lub adres np. nazwę ulicy albo miasta.\nWyszukiwanie poprzez kategorie t.j. restauracje albo kina jest niemożliwe!",
          "work_in_progress": "Pracujemy nad tym aby ulepszyć wyszukiwanie miejsc i uczynić je bardziej intuicyjnym."
        },
        "try_this": {
          "address": "Proszę wprowadź więcej <strong>danych adresowych</strong>.",
          "intro": "Spróbuj tak:",
          "spell_check": "Sprawdź <strong>poprawność literowania</strong> twojego wpisu"
        }
      },
      "results": {
        "ticker": {
          "few": "%{count} wyników:",
          "many": "%{count} wyników:",
          "one": "%{count} wynik:",
          "other": "%{count} wyników:"
        }
      },
      "search": {
        "for": "Szukam \"%{q}\"",
        "not_found": "Nie można znaleźć miejsca!"
      }
    },
    "timeout": {
      "headline": "Przepraszamy, coś poszło nie tak",
      "info": "Usługa wyszukiwania była tymczasowo niedostępna",
      "repeat_search": "ponów wyszukiwanie"
    }
  },
  "splash": {
    "countline": "%{count} miejsc zostało już oznaczonych.",
    "headline": "Każdy może dodawać miejsca dostępne dla osób na wózkach!",
    "start": "Start",
    "step1": "Kliknij miejsce, które znasz",
    "step2": "Zaznacz i kliknij \"zachowaj\"",
    "step3": "Rejestracja nie jest potrzebna.",
    "what_is_wheelmap": "Co to jest Wheelmap?"
  },
  "statistics": "Statystyki",
  "support": {
    "array": {
      "last_word_connector": " oraz ",
      "sentence_connector": "i",
      "two_words_connector": " i ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Proszę wybrać"
    }
  },
  "time": {
    "am": "przed południem",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "po południu"
  },
  "toiletstatus": {
    "no": "Toaleta nieprzystosowana dla wózków",
    "unknown": "Status toalety nieznany",
    "what_is": {
      "no": "Wewnętrzna minimalna szerokość drzwi to 90cm (35 cali), wolna powierzchnia manewrowa min. 150 x 150 cm (59 x 59), wysokość deski klozetowej odpowiednia dla wózków inwalidzkich, składane uchwyty oraz dostępna umywalka. ",
      "unknown": "Pomóż oznaczając status toalety!",
      "yes": "Wewnętrzna minimalna szerokość drzwi to 90cm (35 cali), wolna powierzchnia manewrowa min. 150 x 150 cm (59 x 59), wysokość deski klozetowej odpowiednia dla wózków inwalidzkich, składane uchwyty oraz dostępna umywalka. "
    },
    "yes": "Toaleta przystosowana dla wózków"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Twoje konto jest już aktywne!"
      },
      "error": {
        "notice": "E-mail i hasło nie pasują do siebie."
      },
      "notice": "Jesteś zalogowany!"
    },
    "destroy": {
      "notice": "Do zobaczenia, wróć tutaj wkrótce!"
    },
    "new": {
      "email": "Adres e-mail",
      "login": "Zaloguj się",
      "login_with_twitter": "Zaloguj się kontem z Twittera",
      "password": "Hasło",
      "remember_me": "Nie wylogowywuj się"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "Jesteś prawie u celu! Teraz sfinalizuj swoje konto Wheelmap:",
        "set_password_for_mobile": "Udało Ci się zarejestrować z OpenStreetMap. Proszę wybierz adres e-mail, z którego chcesz korzystać z Wheelmap, dzięki czemu możemy na bieżąco informować Cię o naszych działaniach (na przykład liczba oznaczonych miejsc). Możesz uzyskać dostęp do tych informacji w zakładce \"Profil\".",
        "text": "Jak możemy się z Tobą skontaktować? Tę informację będziesz mógł później edytować."
      }
    },
    "edit": {
      "headline": {
        "your_images": "twoje załadowane obrazy"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Informacje o Twoim koncie"
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "Tak, chcę otrzymywać bieżące informacje o Wheelmap.",
        "text": "Bądź na bieżąco z biuletynem Wheelmap. Bez obaw, nie będziemy Cię spamować. Dostaniesz od nas wiadomość najwyżej raz w miesiącu.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "Nie przesłano jeszcze żadnych zdjęć.",
        "title": "Zdjęcia"
      },
      "show": {
        "greeting": {
          "anonymously": "Witaj",
          "personalized": "Witaj %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "few": "przesłane % {count} zdjęcia",
            "many": "przesłanych % {count} zdjęć",
            "one": "przesłane % {count} zdjęcie",
            "other": "przesłanych % {count} zdjęć"
          },
          "pois_added": {
            "few": "dodane %{count} miejsca",
            "many": "dodanych %{count} miejsc",
            "one": "dodane %{count} miejsce",
            "other": "dodanych %{count} miejsc"
          },
          "pois_edited": {
            "few": "zedytowane % {count} miejsca",
            "many": "zedytowanych % {count} miejsc",
            "one": "zedytowane % {count} miejsce",
            "other": "zedytowanych % {count} miejsc"
          },
          "pois_marked": {
            "few": "oznaczone %{count} miejsca",
            "many": "oznaczonych %{count} miejsc",
            "one": "oznaczone %{count} miejsce",
            "other": "oznaczonych %{count} miejsc"
          },
          "text": "Masz"
        },
        "text_html": "Witaj,<br>\nMiło Cię widzieć (znów) na Wheelmap.org! Cieszy nas, że jesteś na pokładzie! Możesz przejrzeć nasz <a href=\"http://news.wheelmap.org/en/\">blog</a> lub <a href=\"http://news.wheelmap.org/en/FAQ/\">FAQs</a>  jeśli chcesz poznać Wheelmap.org nieco lepiej. Możesz też dowiedzieć się więcej o <a href=\"http://news.wheelmap.org/en/wheelmap-ambassador/\">projektach</a> które oferujemy na Wheelmap.org i to, jak możesz się zaangażować.<br>\nAby pozostać w kontakcie możesz zapisać się do naszego comiesięcznego newslettera i śledzić nas na <a href=\"https://www.facebook.com/wheelmap\">Facebooku </a> i na <a href=\"https://twitter.com/wheelmap\">Twitterze </a>.  Czekamy na Twoje opinie i rozpoczęcie rozmowy!<br>\nA teraz, miłego mapowania!<br>\nTwój Zespół Wheelmap",
        "title": "Przegląd"
      },
      "widget": {
        "categories": "Pokaż filtr kategorii",
        "center": "Obszar mapy",
        "empty_center": "Wyszukaj środek mapy...",
        "empty_provider": "Wybierz dostawcę",
        "height": "Wysokość",
        "legends": {
          "embed": "Kod osadzenia",
          "embed_explanation": "Istnieje możliwość zmiany specyfikacji dotyczących szerokości geograficznej (<code>lat</code>), długości geograficznej (<code>lon</code>) i poziomu powiększenia (<code>zoom</code>) ręcznie w kodzie, który znajduje się powyżej, a tym samym dostosowania segmentu mapy (widget) w zależności od lokalizacji, którą chcesz wyświetlić.",
          "general": "Stwórz swój własny widżet Wheelmap i umieść go na swojej stronie internetowej lub blogu.",
          "preview": "Podgląd",
          "settings": "Ustawienia"
        },
        "providers": "Dostawca",
        "title": "Widget",
        "width": "Szerokość"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Pierwsza",
      "last": "Ostatnia &raquo;",
      "next": "Dalej &rsaquo;",
      "previous": "&lsaquo; Wstecz",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Ograniczony dostęp dla wózków",
    "no": "Niedostępne dla osób na wózkach",
    "unknown": "Nieznany status",
    "yes": "Dostępne"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Projekt przygotowany przez",
      "based_on": "Projekt oparty na",
      "become_a_supporter": "Zostań zwolennikiem",
      "main_supporter": "Główny sponsor"
    },
    "itunes": {
      "alt": "Logo AppStore",
      "title": "Ściągnij teraz aplikację na iPhone'a!"
    },
    "logo": {
      "alt": "Logo wheelmap - znajdź miejsca dostępne dla osób na wózkach",
      "title": "Wheelmap - znajdź miejsca dostępne dla osób na wózkach"
    },
    "what_is": {
      "fully_accessible": "Wejście bez schodów, wszystkie pomieszczenia bez schodów.",
      "limited_accessible": "Przy wejściu jest jeden schodek o wysokości maks. 7 cm (3 in), w większości pomieszczeń nie ma schodów.",
      "not_accessible": "Przy wejściu jest schodek lub kilka schodków, pomieszczenia nie są przystosowane.",
      "unknown_accessible": "Pomóż nam zaznaczając miejsca!"
    }
  },
  "will_paginate": {
    "next_label": "Następny &#8594;",
    "page_entries_info": {
      "multi_page": "Wyświetl %{model} %{from} - %{to} of %{count} ogółem",
      "multi_page_html": "Wyświetl %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> ogółem",
      "single_page": {
        "one": "Wyświetlanie 1 %{model}",
        "other": "Wyświetl wszystkie %{count} %{model}",
        "zero": "%{model} nie odnaleziony"
      },
      "single_page_html": {
        "one": "Wyświetl <b>1</b> %{model}",
        "other": "Wyświetlanie <b>all&nbsp;%{count}</b> %{model}",
        "zero": "Nie odnaleziono %{model} "
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Poprzedni"
  }
});
