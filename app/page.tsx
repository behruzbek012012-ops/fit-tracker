"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FitnessApp() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [selectedWorkout, setSelectedWorkout] = useState(null)
  const [selectedChallenge, setSelectedChallenge] = useState(null)
  const [photoFile, setPhotoFile] = useState(null)
  const [dailySteps, setDailySteps] = useState(0)
  const [waterIntake, setWaterIntake] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  // добавление состояния для фильтрации
  const [selectedCategory, setSelectedCategory] = useState("Все")

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setSelectedExercise(null)
    setSelectedWorkout(null)
    setSelectedChallenge(null)
  }

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setPhotoFile(file)
      alert(`Фото загружено: ${file.name}. Анализ калорий в разработке!`)
    }
  }

  useEffect(() => {
    setDailySteps(8547)
  }, [])

  const startExercise = (exerciseName) => {
    setSelectedExercise(exerciseName)
    setCurrentPage("workout")
  }

  const acceptChallenge = (challengeTitle) => {
    setSelectedChallenge(challengeTitle)
    alert(`Вы приняли вызов: ${challengeTitle}! Удачи!`)
  }

  const recipes = [
    {
      name: "Овсянка с бананом и орехами",
      calories: 320,
      protein: 12,
      fat: 8,
      carbs: 52,
      cookTime: "10 мин",
      category: "Завтрак",
      image: "/oatmeal-with-banana-and-nuts-breakfast.jpg",
      ingredients: ["80г овсяных хлопьев", "1 банан", "30г грецких орехов", "250мл молока", "1 ч.л. меда"],
      instructions: [
        "Залейте овсяные хлопья горячим молоком",
        "Дайте настояться 5 минут",
        "Нарежьте банан кружочками",
        "Измельчите орехи",
        "Добавьте банан, орехи и мед",
      ],
    },
    {
      name: "Блинчики с творогом",
      calories: 280,
      protein: 16,
      fat: 10,
      carbs: 32,
      cookTime: "15 мин",
      category: "Завтрак",
      image: "/pancakes-with-cottage-cheese.jpg",
      ingredients: ["2 яйца", "200г творога", "3 ст.л. муки", "1 ст.л. сахара", "Щепотка соли", "Масло для жарки"],
      instructions: [
        "Смешайте яйца с творогом",
        "Добавьте муку, сахар и соль",
        "Замесите однородное тесто",
        "Жарьте блинчики на сковороде",
        "Подавайте с медом или ягодами",
      ],
    },
    {
      name: "Омлет с овощами",
      calories: 220,
      protein: 18,
      fat: 14,
      carbs: 8,
      cookTime: "12 мин",
      category: "Завтрак",
      image: "/vegetable-omelet.jpg",
      ingredients: ["3 яйца", "1 помидор", "1/2 болгарского перца", "50г сыра", "Зелень", "Масло"],
      instructions: [
        "Взбейте яйца с солью",
        "Нарежьте овощи мелкими кубиками",
        "Обжарьте овощи на сковороде",
        "Залейте яйцами и готовьте 5 минут",
        "Посыпьте сыром и зеленью",
      ],
    },
    {
      name: "Куриная грудка с киноа",
      calories: 450,
      protein: 35,
      fat: 12,
      carbs: 38,
      cookTime: "25 мин",
      category: "Обед",
      image: "/grilled-chicken-breast-with-quinoa.jpg",
      ingredients: [
        "150г куриной грудки",
        "100г киноа",
        "1 огурец",
        "1 помидор",
        "2 ст.л. оливкового масла",
        "Специи по вкусу",
      ],
      instructions: [
        "Отварите киноа в подсоленной воде 15 минут",
        "Обжарьте куриную грудку со специями",
        "Нарежьте овощи кубиками",
        "Смешайте все ингредиенты",
        "Заправьте оливковым маслом",
      ],
    },
    {
      name: "Борщ с говядиной",
      calories: 380,
      protein: 22,
      fat: 15,
      carbs: 35,
      cookTime: "45 мин",
      category: "Обед",
      image: "/beef-borscht.jpg",
      ingredients: ["200г говядины", "1 свекла", "1 морковь", "1 луковица", "200г капусты", "2 картофелины", "Сметана"],
      instructions: [
        "Отварите говядину до готовности",
        "Натрите свеклу и морковь",
        "Обжарьте овощи на сковороде",
        "Добавьте в бульон овощи и картофель",
        "Варите 20 минут, подавайте со сметаной",
      ],
    },
    {
      name: "Паста с креветками",
      calories: 420,
      protein: 28,
      fat: 16,
      carbs: 42,
      cookTime: "20 мин",
      category: "Обед",
      image: "/shrimp-pasta.jpg",
      ingredients: ["100г пасты", "200г креветок", "2 зубчика чеснока", "1 помидор", "Оливковое масло", "Зелень"],
      instructions: [
        "Отварите пасту до готовности",
        "Обжарьте чеснок в масле",
        "Добавьте креветки и помидоры",
        "Смешайте с пастой",
        "Посыпьте зеленью перед подачей",
      ],
    },
    {
      name: "Тунец с салатом из нута",
      calories: 420,
      protein: 32,
      fat: 14,
      carbs: 35,
      cookTime: "15 мин",
      category: "Обед",
      image: "/tuna-with-chickpea-salad.jpg",
      ingredients: [
        "150г консервированного тунца",
        "200г вареного нута",
        "1 огурец",
        "2 помидора черри",
        "Красный лук",
        "Оливковое масло",
      ],
      instructions: [
        "Слейте жидкость с тунца",
        "Нарежьте овощи мелкими кубиками",
        "Смешайте нут с овощами",
        "Добавьте тунец",
        "Заправьте маслом и специями",
      ],
    },
    {
      name: "Лосось на пару с овощами",
      calories: 380,
      protein: 28,
      fat: 18,
      carbs: 22,
      cookTime: "20 мин",
      category: "Ужин",
      image: "/steamed-salmon-with-vegetables.jpg",
      ingredients: ["150г филе лосося", "200г брокколи", "1 морковь", "1 кабачок", "Лимон", "Зелень"],
      instructions: [
        "Подготовьте пароварку",
        "Нарежьте овощи крупными кусками",
        "Готовьте лосось на пару 12 минут",
        "Добавьте овощи и готовьте еще 8 минут",
        "Подавайте с лимоном и зеленью",
      ],
    },
    {
      name: "Гречка с грибами",
      calories: 310,
      protein: 12,
      fat: 9,
      carbs: 48,
      cookTime: "25 мин",
      category: "Ужин",
      image: "/buckwheat-with-mushrooms.jpg",
      ingredients: ["100г гречки", "200г шампиньонов", "1 луковица", "2 ст.л. растительного масла", "Зелень", "Специи"],
      instructions: [
        "Отварите гречку до готовности",
        "Обжарьте лук до золотистого цвета",
        "Добавьте нарезанные грибы",
        "Тушите 10 минут",
        "Смешайте с гречкой и зеленью",
      ],
    },
    {
      name: "Запеченная треска с картофелем",
      calories: 340,
      protein: 26,
      fat: 8,
      carbs: 38,
      cookTime: "35 мин",
      category: "Ужин",
      image: "/baked-cod-with-potatoes.jpg",
      ingredients: ["150г трески", "3 картофелины", "1 луковица", "1 морковь", "Лимон", "Специи"],
      instructions: [
        "Нарежьте картофель кружочками",
        "Выложите в форму с овощами",
        "Сверху положите рыбу",
        "Запекайте в духовке 30 минут при 180°C",
        "Подавайте с лимоном",
      ],
    },
    {
      name: "Греческий йогурт с ягодами",
      calories: 180,
      protein: 15,
      fat: 5,
      carbs: 20,
      cookTime: "5 мин",
      category: "Перекус",
      image: "/greek-yogurt-berries.png",
      ingredients: [
        "200г греческого йогурта",
        "100г смешанных ягод",
        "1 ст.л. меда",
        "30г миндальных хлопьев",
        "Мята для украшения",
      ],
      instructions: [
        "Выложите йогурт в миску",
        "Добавьте свежие ягоды",
        "Полейте медом",
        "Посыпьте миндальными хлопьями",
        "Украсьте листиками мяты",
      ],
    },
    {
      name: "Творожная запеканка",
      calories: 250,
      protein: 18,
      fat: 8,
      carbs: 24,
      cookTime: "30 мин",
      category: "Перекус",
      image: "/cottage-cheese-casserole.jpg",
      ingredients: ["300г творога", "2 яйца", "3 ст.л. манки", "2 ст.л. сахара", "Ванилин", "Изюм"],
      instructions: [
        "Смешайте творог с яйцами",
        "Добавьте манку и сахар",
        "Всыпьте ванилин и изюм",
        "Выпекайте в духовке 25 минут при 180°C",
        "Подавайте теплой",
      ],
    },
    {
      name: "Протеиновые шарики",
      calories: 160,
      protein: 12,
      fat: 8,
      carbs: 12,
      cookTime: "15 мин",
      category: "Перекус",
      image: "/protein-balls.jpg",
      ingredients: ["100г овсяных хлопьев", "50г арахисовой пасты", "30г меда", "30г семян чиа", "Кокосовая стружка"],
      instructions: [
        "Измельчите овсяные хлопья",
        "Смешайте с арахисовой пастой и медом",
        "Добавьте семена чиа",
        "Сформируйте шарики",
        "Обваляйте в кокосовой стружке",
      ],
    },
    {
      name: "Смузи с бананом и шпинатом",
      calories: 140,
      protein: 6,
      fat: 2,
      carbs: 28,
      cookTime: "5 мин",
      category: "Перекус",
      image: "/green-smoothie.jpg",
      ingredients: ["1 банан", "50г шпината", "200мл миндального молока", "1 ч.л. меда", "Лед"],
      instructions: [
        "Очистите банан",
        "Промойте шпинат",
        "Взбейте все в блендере",
        "Добавьте лед по вкусу",
        "Подавайте сразу",
      ],
    },
    {
      name: "Смузи-боул с авокадо",
      calories: 290,
      protein: 8,
      fat: 16,
      carbs: 32,
      cookTime: "10 мин",
      category: "Завтрак",
      image: "/avocado-smoothie-bowl.jpg",
      ingredients: ["1 авокадо", "1 банан", "200мл кокосового молока", "1 ст.л. семян чиа", "Ягоды для украшения"],
      instructions: [
        "Взбейте авокадо с бананом в блендере",
        "Добавьте кокосовое молоко",
        "Перелейте в миску",
        "Посыпьте семенами чиа",
        "Украсьте свежими ягодами",
      ],
    },
  ]

  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )
    }

    switch (currentPage) {
      case "home":
        return <Home />
      case "register":
        return <RegisterPage />
      case "calories":
        return <CaloriesPage />
      case "exercises":
        return <ExercisesPage />
      case "meals":
        return <MealsPage />
      case "progress":
        return <ProgressPage />
      case "challenges":
        return <ChallengesPage />
      case "workout":
        return <WorkoutPage />
      default:
        return <Home />
    }
  }

  const Home = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">FitTracker</h1>
                <p className="text-xs text-slate-500">Ваш путь к здоровью</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-xs">🔔</span>
              </div>
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ваш персональный фитнес-помощник</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Отслеживайте калории, выполняйте упражнения и получайте рекомендации по питанию
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105 card-hover">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{dailySteps.toLocaleString()}</div>
              <div className="text-sm text-slate-600">шагов сегодня</div>
              <div className="text-xs text-blue-500 mt-1">🎯 Цель: 10,000</div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105 card-hover">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-6 mx-0.5 rounded-full transition-all duration-500 ${i < waterIntake ? "bg-blue-500" : "bg-slate-200"
                      }`}
                  />
                ))}
              </div>
              <div className="text-sm text-slate-600">стаканов воды</div>
              <button
                onClick={() => setWaterIntake((prev) => (prev < 8 ? prev + 1 : prev))}
                className="text-xs text-blue-500 mt-1 hover:text-blue-700 transition-colors"
              >
                + Добавить стакан
              </button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105 card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📊</span>
                </div>
                <CardTitle className="text-slate-800">Счетчик калорий</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600">
                Фотографируйте еду и автоматически подсчитывайте калории
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105 card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">💪</span>
                </div>
                <CardTitle className="text-slate-800">Упражнения</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600">Персональные тренировки для всех групп мышц</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105 card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🥗</span>
                </div>
                <CardTitle className="text-slate-800">Здоровое питание</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600">
                Рекомендации полезных блюд с подсчетом калорий
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105 card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📈</span>
                </div>
                <CardTitle className="text-slate-800">Прогресс</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600">Отслеживайте свои достижения и статистику</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105 card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <CardTitle className="text-slate-800">Челленджи</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600">
                Участвуйте в фитнес-вызовах и получайте награды
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mb-24">
          <Button
            onClick={() => handlePageChange("register")}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Начать путь к здоровью
          </Button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 pb-20">
        <div className="flex justify-between items-center text-xs text-slate-400 mt-8">
          <span>Sevgi bilan qilingan❤</span>
          <span className="font-semibold">Hackatoon</span>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-slate-200 shadow-lg z-20">
        <div className="max-w-md mx-auto px-2">
          <div className="flex">
            {[
              { id: "home", label: "Главная", icon: "🏠" },
              { id: "register", label: "Регистрация", icon: "👤" },
              { id: "calories", label: "Калории", icon: "📊" },
              { id: "exercises", label: "Тренировки", icon: "💪" },
              { id: "meals", label: "Питание", icon: "🥗" },
              { id: "progress", label: "Прогресс", icon: "📈" },
              { id: "challenges", label: "Вызовы", icon: "🏆" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`flex-1 flex flex-col items-center py-2 rounded-lg transition-all duration-200 ${currentPage === item.id ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                <div className="w-6 h-6 flex items-center justify-center mb-1">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )

  const RegisterPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-md mx-auto px-4 py-4">
        <button
          onClick={() => handlePageChange("home")}
          className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
        >
          <span className="text-xl mr-2">←</span>
          <span className="font-medium">На главную</span>
        </button>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-blue-800 text-center">Создать аккаунт</CardTitle>
            <CardDescription className="text-center">Заполните данные для персонализации</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Имя</label>
              <input
                type="text"
                className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Введите ваше имя"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Пароль</label>
              <input
                type="password"
                className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Минимум 8 символов"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Рост (см)</label>
                <input
                  type="number"
                  className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="170"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Вес (кг)</label>
                <input
                  type="number"
                  className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="70"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Пол</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="py-3 px-4 border border-slate-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                  Мужской
                </button>
                <button className="py-3 px-4 border border-slate-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                  Женский
                </button>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl mt-6 transition-all duration-300 hover:scale-105 shadow-lg">
              Зарегистрироваться
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-md mx-auto px-4 pb-20">
        <div className="flex justify-between items-center text-xs text-slate-400 mt-8">
          <span>Sevgi bilan qilingan❤</span>
          <span className="font-semibold">Hackatoon</span>
        </div>
      </div>
    </div>
  )

  const CaloriesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-md mx-auto px-4 py-4">
        <button
          onClick={() => handlePageChange("home")}
          className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
        >
          <span className="text-xl mr-2">←</span>
          <span className="font-medium">На главную</span>
        </button>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <Card className="bg-white/80 backdrop-blur-sm border-orange-200 mb-6 shadow-lg card-hover">
          <CardHeader>
            <CardTitle className="text-orange-800">Сегодня</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">1,247</div>
              <div className="text-sm text-slate-600 mb-4">из 2,000 ккал</div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: "62%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>Белки: 85г</span>
                <span>Жиры: 45г</span>
                <span>Углеводы: 120г</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-orange-200 mb-6 shadow-lg">
          <CardHeader>
            <CardTitle className="text-orange-800">Добавить блюдо</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center hover:border-orange-400 transition-colors duration-300">
              <div className="text-4xl mb-4">📷</div>
              <p className="text-slate-600 mb-4">Сфотографируйте ваше блюдо</p>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoUpload}
                className="hidden"
                id="photo-upload"
              />
              <label htmlFor="photo-upload">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
                  Сделать фото
                </Button>
              </label>
            </div>

            <div className="mt-4">
              <p className="text-sm text-slate-600 mb-2">Быстрое добавление:</p>
              <div className="flex flex-wrap gap-2">
                {["Завтрак", "Обед", "Ужин", "Перекус", "Вода"].map((item, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm hover:bg-orange-200 transition-all duration-300 hover:scale-105"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-orange-800">Недавние блюда</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Овсянка с ягодами", calories: 320, time: "08:30", icon: "🥣" },
                { name: "Куриная грудка с овощами", calories: 450, time: "13:15", icon: "🍗" },
                { name: "Греческий салат", calories: 280, time: "19:00", icon: "🥗" },
                { name: "Протеиновый коктейль", calories: 180, time: "21:30", icon: "🥤" },
              ].map((meal, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 px-2 border border-slate-100 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-102"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{meal.icon}</span>
                    <div>
                      <div className="font-medium text-slate-900">{meal.name}</div>
                      <div className="text-sm text-slate-500">{meal.time}</div>
                    </div>
                  </div>
                  <div className="text-orange-600 font-semibold">{meal.calories} ккал</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-md mx-auto px-4 pb-20">
        <div className="flex justify-between items-center text-xs text-slate-400 mt-8">
          <span>Sevgi bilan qilingan❤</span>
          <span className="font-semibold">Hackatoon</span>
        </div>
      </div>
    </div>
  )

  const ExercisesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-md mx-auto px-4 py-4">
        <button
          onClick={() => handlePageChange("home")}
          className="flex items-center text-green-600 hover:text-green-800 transition-colors"
        >
          <span className="text-xl mr-2">←</span>
          <span className="font-medium">На главную</span>
        </button>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { name: "Грудь", icon: "💪", gradient: "from-red-400 to-red-600" },
            { name: "Спина", icon: "🏋️", gradient: "from-blue-400 to-blue-600" },
            { name: "Ноги", icon: "🦵", gradient: "from-green-400 to-green-600" },
            { name: "Руки", icon: "💪", gradient: "from-purple-400 to-purple-600" },
          ].map((group, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-r ${group.gradient} text-white border-0 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{group.icon}</div>
                <div className="font-semibold">{group.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-800">Популярные упражнения</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Отжимания",
                  sets: "3x15",
                  difficulty: "Средний",
                  target: "Грудь, руки",
                },
                {
                  name: "Приседания",
                  sets: "3x20",
                  difficulty: "Легкий",
                  target: "Ноги, ягодицы",
                },
                {
                  name: "Планка",
                  sets: "3x60с",
                  difficulty: "Средний",
                  target: "Пресс, спина",
                },
                {
                  name: "Подтягивания",
                  sets: "3x8",
                  difficulty: "Сложный",
                  target: "Спина, руки",
                },
              ].map((exercise, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:scale-102"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-slate-900">{exercise.name}</h3>
                    <span
                      className={`text-sm px-2 py-1 rounded ${exercise.difficulty === "Легкий"
                          ? "bg-green-100 text-green-700"
                          : exercise.difficulty === "Средний"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {exercise.difficulty}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600 mb-1">
                    <strong>Подходы:</strong> {exercise.sets}
                  </div>
                  <div className="text-sm text-slate-600 mb-3">
                    <strong>Мышцы:</strong> {exercise.target}
                  </div>
                  <Button
                    onClick={() => startExercise(exercise.name)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Начать тренировку
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-md mx-auto px-4 pb-20">
        <div className="flex justify-between items-center text-xs text-slate-400 mt-8">
          <span>Sevgi bilan qilingan❤</span>
          <span className="font-semibold">Hackatoon</span>
        </div>
      </div>
    </div>
  )

  const MealsPage = () => {
    const filteredRecipes =
      selectedCategory === "Все" ? recipes : recipes.filter((recipe) => recipe.category === selectedCategory)

    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-md mx-auto px-4 py-4">
          <button
            onClick={() => handlePageChange("home")}
            className="flex items-center text-yellow-600 hover:text-yellow-800 transition-colors"
          >
            <span className="text-xl mr-2">←</span>
            <span className="font-medium">На главную</span>
          </button>
        </div>

        <div className="max-w-md mx-auto px-4 py-6">
          {selectedRecipe ? (
            <div className="space-y-6">
              <button
                onClick={() => setSelectedRecipe(null)}
                className="flex items-center text-green-600 hover:text-green-800 transition-colors mb-4"
              >
                <span className="text-xl mr-2">←</span>
                <span className="font-medium">Назад к рецептам</span>
              </button>

              <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-xl">
                <CardContent className="p-6">
                  <img
                    src={selectedRecipe.image || "/placeholder.svg"}
                    alt={selectedRecipe.name}
                    className="w-full h-48 rounded-lg object-cover mb-4"
                  />
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{selectedRecipe.name}</h2>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-bold text-green-700">{selectedRecipe.calories} ккал</div>
                    <div className="text-sm text-slate-600">⏱️ {selectedRecipe.cookTime}</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-green-50 rounded-lg">
                    <div className="text-center">
                      <div className="font-semibold text-green-700">{selectedRecipe.protein}г</div>
                      <div className="text-xs text-slate-600">Белки</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-700">{selectedRecipe.fat}г</div>
                      <div className="text-xs text-slate-600">Жиры</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-700">{selectedRecipe.carbs}г</div>
                      <div className="text-xs text-slate-600">Углеводы</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Ингредиенты:</h3>
                    <ul className="space-y-2">
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center text-slate-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Приготовление:</h3>
                    <ol className="space-y-3">
                      {selectedRecipe.instructions.map((step, index) => (
                        <li key={index} className="flex text-slate-700">
                          <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={() => {
                      alert(`Рецепт "${selectedRecipe.name}" добавлен в ваш план питания!`)
                      setSelectedRecipe(null)
                    }}
                  >
                    Добавить в план питания
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Все", "Завтрак", "Обед", "Ужин", "Перекус"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 backdrop-blur-sm border rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${selectedCategory === category
                        ? "bg-green-500 text-white border-green-500"
                        : "bg-white/80 text-green-700 border-green-200 hover:bg-green-50"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {filteredRecipes.map((meal, index) => (
                  <Card
                    key={index}
                    className="bg-white/80 backdrop-blur-sm border-green-200 shadow-lg card-hover cursor-pointer"
                    onClick={() => setSelectedRecipe(meal)}
                  >
                    <CardContent className="p-4">
                      <div className="flex space-x-4">
                        <img
                          src={meal.image || "/placeholder.svg"}
                          alt={meal.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-slate-900">{meal.name}</h3>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              {meal.category}
                            </span>
                          </div>
                          <div className="text-sm text-green-600 mb-2">{meal.cookTime}</div>
                          <div className="text-lg font-bold text-green-700 mb-2">{meal.calories} ккал</div>
                          <div className="flex space-x-4 text-xs text-slate-600">
                            <span>Б: {meal.protein}г</span>
                            <span>Ж: {meal.fat}г</span>
                            <span>У: {meal.carbs}г</span>
                          </div>
                        </div>
                        <div className="flex items-center text-green-500">
                          <span className="text-lg">→</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="max-w-md mx-auto px-4 pb-20">
          <div className="flex justify-between items-center text-xs text-slate-400 mt-8">
            <span>Sevgi bilan qilingan❤</span>
            <span className="font-semibold">Hackatoon</span>
          </div>
        </div>
      </div>
    )
  }

  const ProgressPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-md mx-auto px-4 py-4">
        <button
          onClick={() => handlePageChange("home")}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span className="text-xl mr-2">←</span>
          <span className="font-medium">На главную</span>
        </button>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <Card className="bg-white/80 backdrop-blur-sm border-purple-200 mb-6 shadow-lg card-hover">
          <CardHeader>
            <CardTitle className="text-purple-800">Статистика недели</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">5</div>
                <div className="text-sm text-slate-600">тренировок</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">-1.2</div>
                <div className="text-sm text-slate-600">кг потеряно</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">12,450</div>
                <div className="text-sm text-slate-600">ср. шагов/день</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">1,850</div>
                <div className="text-sm text-slate-600">ср. ккал/день</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-purple-200 mb-6 shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-800">Достижения</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: "Первая неделя", desc: "Завершили первую неделю тренировок", icon: "🎯", unlocked: true },
                { title: "10,000 шагов", desc: "Прошли 10,000 шагов за день", icon: "👟", unlocked: true },
                { title: "Здоровое питание", desc: "7 дней правильного питания", icon: "🥗", unlocked: false },
                { title: "Марафонец", desc: "Пробежали 5 км без остановки", icon: "🏃", unlocked: false },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${achievement.unlocked
                      ? "bg-purple-50 border border-purple-200"
                      : "bg-slate-50 border border-slate-200 opacity-60"
                    }`}
                >
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">{achievement.icon}</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{achievement.title}</div>
                    <div className="text-sm text-slate-600">{achievement.desc}</div>
                  </div>
                  {achievement.unlocked && <div className="ml-auto text-purple-600">✓</div>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-md mx-auto px-4 pb-20">
        <div className="flex justify-between items-center text-xs text-slate-400 mt-8">
          <span>Sevgi bilan qilingan❤</span>
          <span className="font-semibold">Hackatoon</span>
        </div>
      </div>
    </div>
  )

  const ChallengesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-md mx-auto px-4 py-4">
        <button
          onClick={() => handlePageChange("home")}
          className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
        >
          <span className="text-xl mr-2">←</span>
          <span className="font-medium">На главную</span>
        </button>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <Card className="bg-gradient-to-r from-pink-500 to-rose-500 text-white mb-6 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white">Активный вызов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl mb-2">🔥</div>
              <h3 className="text-xl font-bold mb-2">{selectedChallenge || "30-дневный челлендж"}</h3>
              <p className="text-pink-100 mb-4">Тренируйтесь каждый день в течение месяца</p>
              <div className="bg-white bg-opacity-20 rounded-full h-2 mb-2">
                <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{ width: "40%" }}></div>
              </div>
              <div className="text-sm">12 из 30 дней завершено</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-pink-800">Доступные вызовы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Водный баланс",
                  desc: "Выпивайте 8 стаканов воды 7 дней подряд",
                  icon: "💧",
                  reward: "50 очков",
                  difficulty: "Легкий",
                },
                {
                  title: "Утренняя зарядка",
                  desc: "Делайте зарядку каждое утро в течение 2 недель",
                  icon: "🌅",
                  reward: "100 очков",
                  difficulty: "Средний",
                },
                {
                  title: "Без сахара",
                  desc: "Откажитесь от сладкого на 10 дней",
                  icon: "🚫",
                  reward: "150 очков",
                  difficulty: "Сложный",
                },
                {
                  title: "Кардио-марафон",
                  desc: "30 минут кардио каждый день в течение недели",
                  icon: "❤️",
                  reward: "200 очков",
                  difficulty: "Сложный",
                },
              ].map((challenge, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:scale-102"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{challenge.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{challenge.title}</h3>
                        <span
                          className={`text-sm px-2 py-1 rounded ${challenge.difficulty === "Легкий"
                              ? "bg-green-100 text-green-700"
                              : challenge.difficulty === "Средний"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                        >
                          {challenge.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{challenge.desc}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-pink-600">{challenge.reward}</span>
                        <Button
                          size="sm"
                          onClick={() => acceptChallenge(challenge.title)}
                          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Принять
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-md mx-auto px-4 pb-20">
        <div className="flex justify-between items-center text-xs text-slate-400 mt-8">
          <span>Sevgi bilan qilingan❤</span>
          <span className="font-semibold">Hackatoon</span>
        </div>
      </div>
    </div>
  )

  const WorkoutPage = () => {
    const exerciseData = {
      Отжимания: {
        warmup: "5 минут легкой разминки",
        exercises: [
          "1 подход: 10 отжиманий",
          "Отдых 60 секунд",
          "2 подход: 12 отжиманий",
          "Отдых 60 секунд",
          "3 подход: 15 отжиманий",
        ],
        cooldown: "3 минуты растяжки грудных мышц",
        tips: ["Держите тело прямо", "Опускайтесь медленно", "Полностью выпрямляйте руки"],
      },
      Приседания: {
        warmup: "5 минут разминки ног",
        exercises: [
          "1 подход: 15 приседаний",
          "Отдых 45 секунд",
          "2 подход: 18 приседаний",
          "Отдых 45 секунд",
          "3 подход: 20 приседаний",
        ],
        cooldown: "5 минут растяжки ног",
        tips: ["Колени не выходят за носки", "Спина прямая", "Опускайтесь до параллели с полом"],
      },
      Планка: {
        warmup: "3 минуты разминки корпуса",
        exercises: [
          "1 подход: планка 45 секунд",
          "Отдых 30 секунд",
          "2 подход: планка 50 секунд",
          "Отдых 30 секунд",
          "3 подход: планка 60 секунд",
        ],
        cooldown: "3 минуты растяжки спины",
        tips: ["Тело - прямая линия", "Напрягайте пресс", "Дышите равномерно"],
      },
      Подтягивания: {
        warmup: "5 минут разминки плеч и спины",
        exercises: [
          "1 подход: 5 подтягиваний",
          "Отдых 90 секунд",
          "2 подход: 6 подтягиваний",
          "Отдых 90 секунд",
          "3 подход: 8 подтягиваний",
        ],
        cooldown: "5 минут растяжки спины и рук",
        tips: ["Полный хват перекладины", "Подтягивайтесь до подбородка", "Контролируйте опускание"],
      },
    }

    const currentExercise = exerciseData[selectedExercise as keyof typeof exerciseData]

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 pb-20">
        <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-purple-100 sticky top-0 z-50">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex items-center">
              <button
                onClick={() => handlePageChange("exercises")}
                className="mr-3 text-purple-600 hover:text-purple-800 transition-colors"
              >
                ←
              </button>
              <h1 className="text-xl font-bold text-purple-800">{selectedExercise}</h1>
            </div>
          </div>
        </header>

        <div className="max-w-md mx-auto px-4 py-6">
          {currentExercise && (
            <>
              <Card className="bg-white/80 backdrop-blur-sm border-orange-200 mb-6 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center">
                    <span className="mr-2">🔥</span>
                    Разминка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">{currentExercise.warmup}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-purple-200 mb-6 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-sm">💪</span>
                    </div>
                    План тренировки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentExercise.exercises.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 mb-6 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <span className="mr-2">💡</span>
                    Советы по технике
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {currentExercise.tips.map((tip, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-blue-600">•</span>
                        <span className="text-slate-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-green-200 mb-6 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <span className="mr-2">🧘</span>
                    Заминка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">{currentExercise.cooldown}</p>
                </CardContent>
              </Card>

              <Button
                onClick={() => {
                  alert("Тренировка завершена! Отличная работа!")
                  handlePageChange("exercises")
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Завершить тренировку
              </Button>
            </>
          )}
        </div>

        <div className="max-w-md mx-auto px-4 pb-20">
          <div className="flex justify-between items-center text-xs text-slate-400 mt-8">
            <span>Sevgi bilan qilingan❤</span>
            <span className="font-semibold">Hackatoon</span>
          </div>
        </div>
      </div>
    )
  }

  return renderPage()
}
