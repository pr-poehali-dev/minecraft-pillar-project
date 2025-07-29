import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏛️</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Пиллар</h1>
              <Badge variant="outline" className="text-pink-600 border-pink-600">SvinLand4</Badge>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">О городе</a>
              <a href="#olympics" className="text-gray-700 hover:text-pink-600 transition-colors">Олимпиада</a>
              <a href="#cube" className="text-gray-700 hover:text-pink-600 transition-colors">Куб</a>
              <a href="#contacts" className="text-gray-700 hover:text-pink-600 transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Добро пожаловать в 
              <span className="text-pink-600"> Пиллар</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Современный онлайн-город в мире Minecraft на сервере SvinLand4. 
              Центр всесвинлендовской культуры, спорта и развлечений.
            </p>
          </div>
          


          <div className="flex justify-center">
            <div className="relative group">
              {/* Floating building animation */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-4 pointer-events-none">
                <div className="relative">
                  <img 
                    src="/img/f2ba9cda-02ff-4311-bcf4-45cf72bfd411.jpg" 
                    alt="Здание Пиллара" 
                    className="w-16 h-20 object-contain drop-shadow-lg"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-pink-400 rounded-lg opacity-30 blur-md scale-110"></div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.open('https://t.me/pillar_sl4', '_blank')}
                className="relative overflow-hidden group-hover:shadow-lg group-hover:shadow-pink-200 transition-all duration-300 group-hover:border-pink-300 group-hover:bg-pink-50"
              >
                <Icon name="Users" size={20} className="mr-2 group-hover:text-pink-600 transition-colors" />
                <span className="group-hover:text-pink-600 transition-colors">Присоединиться</span>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About City Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О городе Пиллар</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Архитектурный центр SvinLand4 с современными постройками и богатой историей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-pink-600" />
                </div>
                <CardTitle>Архитектура</CardTitle>
                <CardDescription>
                  Уникальные современные постройки в стиле минимализма с элементами футуризма
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-pink-600" />
                </div>
                <CardTitle>Сообщество</CardTitle>
                <CardDescription>
                  Активное сообщество строителей, организаторов событий и творческих личностей
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Star" size={24} className="text-pink-600" />
                </div>
                <CardTitle>События</CardTitle>
                <CardDescription>
                  Регулярные мероприятия, соревнования и культурные события для всех жителей
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Olympics Section */}
      <section id="olympics" className="py-20 px-4 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-4xl">🏅</span>
              <h2 className="text-4xl font-bold text-gray-900">Всесвинлендовская олимпиада</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Грандиозное спортивное событие, объединяющее все города сервера
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calendar" size={24} className="mr-2 text-pink-600" />
                  Расписание событий
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                    <span className="font-medium">Церемония открытия</span>
                    <Badge>15 августа</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Строительные соревнования</span>
                    <Badge variant="outline">16-18 августа</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">PvP турниры</span>
                    <Badge variant="outline">19-20 августа</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                    <span className="font-medium">Церемония закрытия</span>
                    <Badge>21 августа</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Trophy" size={24} className="mr-2 text-pink-600" />
                  Дисциплины
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-pink-50 rounded-lg">
                    <Icon name="Hammer" size={20} className="mx-auto mb-2 text-pink-600" />
                    <span className="text-sm font-medium">Строительство</span>
                  </div>
                  <div className="text-center p-3 bg-pink-50 rounded-lg">
                    <Icon name="Swords" size={20} className="mx-auto mb-2 text-pink-600" />
                    <span className="text-sm font-medium">PvP</span>
                  </div>
                  <div className="text-center p-3 bg-pink-50 rounded-lg">
                    <Icon name="Zap" size={20} className="mx-auto mb-2 text-pink-600" />
                    <span className="text-sm font-medium">Паркур</span>
                  </div>
                  <div className="text-center p-3 bg-pink-50 rounded-lg">
                    <Icon name="Target" size={20} className="mx-auto mb-2 text-pink-600" />
                    <span className="text-sm font-medium">Стрельба</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cube Concert Zone */}
      <section id="cube" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-4xl">🎵</span>
              <h2 className="text-4xl font-bold text-gray-900">Концертная зона "Куб"</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Главная культурная площадка города для музыкальных событий и шоу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-pink-50 to-rose-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Music" size={24} className="mr-2 text-pink-600" />
                  Концерты
                </CardTitle>
                <CardDescription>
                  Еженедельные выступления лучших музыкантов сервера
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Mic" size={24} className="mr-2 text-rose-600" />
                  Караоке
                </CardTitle>
                <CardDescription>
                  Открытый микрофон каждую пятницу для всех желающих
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-slate-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Radio" size={24} className="mr-2 text-gray-600" />
                  DJ-сеты
                </CardTitle>
                <CardDescription>
                  Танцевальные вечеринки с лучшими диджеями SvinLand4
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
              <Icon name="Calendar" size={20} className="mr-2" />
              Посмотреть расписание
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts & Social */}
      <section id="contacts" className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Связь с нами</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Присоединяйтесь к сообществу Пиллара в социальных сетях
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer max-w-sm" onClick={() => window.open('https://t.me/pillar_sl4', '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Telegram</h3>
                <p className="text-gray-400 text-sm">Основной чат сообщества Пиллара</p>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-12 bg-gray-700" />

          <div className="text-center">
            <p className="text-gray-400 mb-4">
              🏛️ Пиллар • SvinLand4 Server • Майнкрафт онлайн-город
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Город Пиллар. Создан с ❤️ для сообщества SvinLand4
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;