/* Если AppRouter содержит обработку логики (авторизация, редиректы и т.д.) → app/routes
* Если AppRouter содержит логику, например, проверку авторизации, редиректы или другие моменты, связанные с состоянием
* маршрутов (например, загрузку данных, привязку роутов к конкретным фичам), то такой компонент лучше располагать в
* app/routes. Это потому, что маршруты как раз относятся к логике переходов и навигации в приложении, и логика
* маршрутизации тесно связана с фичами.
* */
