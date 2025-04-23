import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import IndianFoodHealth from "@/components/food-analysis/indian-food-health";
import HealthGuide from "@/components/food-analysis/health-guide";
import DishRecommendation from "@/components/food-analysis/dish-recommendation";

export default function FoodAnalysisPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Indian Food Health Analysis</h1>

        {/* <HealthGuide /> */}
        <DishRecommendation />
        <IndianFoodHealth />
      </div>
      <Footer />
    </main>
  );
}
