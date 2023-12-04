using CashDrawer.Models.Enums;

namespace CashDrawer.Models.Entities
{
    public class TableRow
    {
        public Mesi Mese { get; set; }
        public float Stipendio { get; set; }
        public float EntrateExtra { get; set; }
        public float Totale { get; set; }
        public float Cassa { get; set; }
        public float Emergenze { get; set; }
        public float Programmato { get; set; }
        public float Varie { get; set; }
        public float ContoComune { get; set; }
        public float ContoWeekend { get; set; }
        public float SpeseMensili { get; set; }
        public float SpeseAnnuali { get; set; }
        public float UsciteExtra { get; set; }
        public float Rimanenza { get; set; }

    }
}
    