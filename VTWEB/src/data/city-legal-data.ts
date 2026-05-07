export interface CityLegalData {
  city: string;
  districtCourt: string;
  highCourt: string;
  averageTimeline: string;
  policeJurisdiction: string;
}

export const cityLegalDataMap: Record<string, CityLegalData> = {
  mumbai: { city: "Mumbai", districtCourt: "City Civil and Sessions Court / Esplanade Court", highCourt: "Bombay High Court", averageTimeline: "12-24 months", policeJurisdiction: "Mumbai Police" },
  delhi: { city: "Delhi", districtCourt: "Tis Hazari Court / Saket Court", highCourt: "Delhi High Court", averageTimeline: "12-18 months", policeJurisdiction: "Delhi Police" },
  bangalore: { city: "Bangalore", districtCourt: "City Civil Court / Mayo Hall", highCourt: "Karnataka High Court", averageTimeline: "18-24 months", policeJurisdiction: "Bengaluru City Police" },
  hyderabad: { city: "Hyderabad", districtCourt: "City Civil Court, Hyderabad", highCourt: "Telangana High Court", averageTimeline: "14-20 months", policeJurisdiction: "Hyderabad City Police" },
  chennai: { city: "Chennai", districtCourt: "City Civil Court, Chennai", highCourt: "Madras High Court", averageTimeline: "12-20 months", policeJurisdiction: "Greater Chennai Police" },
  kolkata: { city: "Kolkata", districtCourt: "City Civil Court, Calcutta", highCourt: "Calcutta High Court", averageTimeline: "15-24 months", policeJurisdiction: "Kolkata Police" },
  pune: { city: "Pune", districtCourt: "Pune District and Sessions Court", highCourt: "Bombay High Court", averageTimeline: "14-24 months", policeJurisdiction: "Pune City Police" },
  ahmedabad: { city: "Ahmedabad", districtCourt: "Ahmedabad City Civil Court", highCourt: "Gujarat High Court", averageTimeline: "12-18 months", policeJurisdiction: "Ahmedabad City Police" },
  jaipur: { city: "Jaipur", districtCourt: "Jaipur District Court", highCourt: "Rajasthan High Court", averageTimeline: "12-20 months", policeJurisdiction: "Jaipur Police" },
  surat: { city: "Surat", districtCourt: "Surat District Court", highCourt: "Gujarat High Court", averageTimeline: "12-18 months", policeJurisdiction: "Surat City Police" },
  lucknow: { city: "Lucknow", districtCourt: "Lucknow District Court", highCourt: "Allahabad High Court (Lucknow Bench)", averageTimeline: "12-24 months", policeJurisdiction: "Lucknow Police" },
  kanpur: { city: "Kanpur", districtCourt: "Kanpur District Court", highCourt: "Allahabad High Court", averageTimeline: "12-24 months", policeJurisdiction: "Kanpur Police" },
  nagpur: { city: "Nagpur", districtCourt: "Nagpur District Court", highCourt: "Bombay High Court (Nagpur Bench)", averageTimeline: "14-22 months", policeJurisdiction: "Nagpur Police" },
  indore: { city: "Indore", districtCourt: "Indore District Court", highCourt: "Madhya Pradesh High Court (Indore Bench)", averageTimeline: "12-20 months", policeJurisdiction: "Indore Police" },
  thane: { city: "Thane", districtCourt: "Thane District Court", highCourt: "Bombay High Court", averageTimeline: "14-24 months", policeJurisdiction: "Thane City Police" },
  bhopal: { city: "Bhopal", districtCourt: "Bhopal District Court", highCourt: "Madhya Pradesh High Court", averageTimeline: "12-20 months", policeJurisdiction: "Bhopal Police" },
  visakhapatnam: { city: "Visakhapatnam", districtCourt: "Visakhapatnam District Court", highCourt: "Andhra Pradesh High Court", averageTimeline: "12-18 months", policeJurisdiction: "Visakhapatnam City Police" },
  pimprichinchwad: { city: "Pimpri-Chinchwad", districtCourt: "Pune District Court", highCourt: "Bombay High Court", averageTimeline: "14-24 months", policeJurisdiction: "Pimpri-Chinchwad Police" },
  patna: { city: "Patna", districtCourt: "Patna Civil Court", highCourt: "Patna High Court", averageTimeline: "18-24 months", policeJurisdiction: "Patna Police" },
  vadodara: { city: "Vadodara", districtCourt: "Vadodara District Court", highCourt: "Gujarat High Court", averageTimeline: "12-18 months", policeJurisdiction: "Vadodara City Police" },
  ghaziabad: { city: "Ghaziabad", districtCourt: "Ghaziabad District Court", highCourt: "Allahabad High Court", averageTimeline: "12-22 months", policeJurisdiction: "Ghaziabad Police" },
  ludhiana: { city: "Ludhiana", districtCourt: "Ludhiana District Court", highCourt: "Punjab and Haryana High Court", averageTimeline: "12-20 months", policeJurisdiction: "Ludhiana Police" },
  agra: { city: "Agra", districtCourt: "Agra District Court", highCourt: "Allahabad High Court", averageTimeline: "12-24 months", policeJurisdiction: "Agra Police" },
  nashik: { city: "Nashik", districtCourt: "Nashik District Court", highCourt: "Bombay High Court", averageTimeline: "14-22 months", policeJurisdiction: "Nashik City Police" },
  faridabad: { city: "Faridabad", districtCourt: "Faridabad District Court", highCourt: "Punjab and Haryana High Court", averageTimeline: "12-20 months", policeJurisdiction: "Faridabad Police" },
  meerut: { city: "Meerut", districtCourt: "Meerut District Court", highCourt: "Allahabad High Court", averageTimeline: "12-24 months", policeJurisdiction: "Meerut Police" },
  rajkot: { city: "Rajkot", districtCourt: "Rajkot District Court", highCourt: "Gujarat High Court", averageTimeline: "12-18 months", policeJurisdiction: "Rajkot City Police" },
  kalyandombivali: { city: "Kalyan-Dombivali", districtCourt: "Kalyan District Court", highCourt: "Bombay High Court", averageTimeline: "14-24 months", policeJurisdiction: "Thane City Police" },
  vasaivirar: { city: "Vasai-Virar", districtCourt: "Vasai District Court", highCourt: "Bombay High Court", averageTimeline: "14-24 months", policeJurisdiction: "Mira-Bhayandar Vasai-Virar Police" },
  varanasi: { city: "Varanasi", districtCourt: "Varanasi District Court", highCourt: "Allahabad High Court", averageTimeline: "12-24 months", policeJurisdiction: "Varanasi Police" },
};

export function getCityLegalData(citySlug: string): CityLegalData | null {
  const normalized = citySlug.trim().toLowerCase().replace(/-/g, "");
  return cityLegalDataMap[normalized] || null;
}
